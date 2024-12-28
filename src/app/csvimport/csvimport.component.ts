import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

interface Frage {
  inhalt: string;
  art: string;
  intensitaet: string;
  kategorieAllg: boolean;
  kategorieDark: boolean;
  kategorieSex: boolean;
}

@Component({
  selector: 'app-csvimport',
  standalone: true,
  imports: [],
  templateUrl: './csvimport.component.html',
  styleUrl: './csvimport.component.scss',
})
export class CSVImportComponent {
  private firestore: Firestore = inject(Firestore);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const csvData = reader.result as string;
        this.parseCSV(csvData);
      };

      reader.readAsText(file);
    }
  }

  private parseCSV(data: string): void {
    const lines = data.split('\n');
    const headers = lines[0].split(',').map((header) => header.trim());

    console.log('Headers:', headers);

    const questions: Frage[] = [];
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',').map((value) => value.trim());

      console.log('Row:', row);

      // Überspringen, falls Zeile leer ist oder nicht genügend Spalten hat
      if (row.length < headers.length) {
        console.warn(`Überspringe unvollständige Zeile: ${row}`);
        continue;
      }

      const question: Frage = {
        art: row[headers.indexOf('art')]?.trim() || 'unbekannt',
        intensitaet: row[headers.indexOf('intensitaet')]?.trim() || 'unbekannt',
        inhalt: row[headers.indexOf('inhalt')]?.trim() || 'unbekannt',
        kategorieAllg: row[headers.indexOf('kategorieAllg')]?.trim() === 'true',
        kategorieDark: row[headers.indexOf('kategorieDark')]?.trim() === 'true',
        kategorieSex: row[headers.indexOf('kategorieSex')]?.trim() === 'true',
      };

      // Validieren, ob die Frage vollständig ist
      if (question.art && question.intensitaet && question.inhalt) {
        questions.push(question);
      } else {
        console.warn(
          `Ungültige Frage, wird übersprungen: ${JSON.stringify(question)}`
        );
      }
    }

    this.validateAndSaveQuestions(questions);
  }

  private validateAndSaveQuestions(questions: Frage[]): void {
    const validQuestions = questions.filter(
      (q) =>
        q.art &&
        q.intensitaet &&
        q.inhalt &&
        q.kategorieAllg !== undefined &&
        q.kategorieDark !== undefined &&
        q.kategorieSex !== undefined
    );

    if (validQuestions.length > 0) {
      console.log(
        `${validQuestions.length} gültige Fragen gefunden. Import startet.`
      );
      this.saveQuestionsToFirestore(validQuestions);
    } else {
      console.error(
        'Keine gültigen Fragen gefunden. Überprüfen Sie die CSV-Datei.'
      );
    }
  }

  private saveQuestionsToFirestore(questions: Frage[]): void {
    const frageCollection = collection(this.firestore, 'fragen');
    questions.forEach(async (question) => {
      try {
        await addDoc(frageCollection, question);
        console.log('Frage erfolgreich hinzugefügt:', question);
      } catch (error) {
        console.error('Fehler beim Hinzufügen der Frage:', error);
      }
    });
  }
}
