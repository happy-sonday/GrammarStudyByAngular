import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacques',
  templateUrl: './jacques.component.html',
  styleUrls: ['./jacques.component.scss'],
})
export class JacquesComponent implements OnInit {
  // addEntry = (events, squirrel) => {
  //   this.journal.push({ events, squirrel });
  // };

  // phi = (table) => {
  //   return (
  //     (table[3] * table[0] - table[2] * table[1]) /
  //     Math.sqrt(
  //       (table[2] + table[3]) *
  //         (table[0] + table[1]) *
  //         (table[1] + table[3]) *
  //         (table[0] + table[2])
  //     )
  //   );
  // };

  // tableFor = (event, journal) => {
  //   let table = [0, 0, 0, 0];
  //   for (let i = 0; i < journal.leng; i++) {
  //     let entry = journal[i],
  //       index = 0;

  //     if (entry.events.includes(event)) index += 1;
  //     if (entry.squirrel) index += 2;
  //     table[index] += 1;
  //   }
  //   return table;
  // };
  constructor() {
    let journal = [];

    // this.addEntry(
    //   ['work', 'touched tree', 'pizza', 'running', 'television'],
    //   false
    // );
    // this.addEntry(
    //   [
    //     'work',
    //     'ice cream',
    //     'cauliflower',
    //     'lasagna',
    //     'touched tree',
    //     'brushed teeth',
    //   ],
    //   false
    // );
    // this.addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

    // console.log(this.journal);

    // console.log(this.phi([76, 9, 4, 1]));

    // console.log(this.tableFor('pizza', this.journal));

    function addEntry(events, squirrel) {
      journal.push({ events, squirrel });
    }

    addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
    addEntry(
      [
        'work',
        'ice cream',
        'cauliflower',
        'lasagna',
        'touched tree',
        'brushed teeth',
      ],
      false
    );
    addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

    function phi(table) {
      return (
        (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt(
          (table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])
        )
      );
    }

    //console.log(phi([76, 9, 4, 1]));

    function tableFor(event, journal) {
      let table = [0, 0, 0, 0];

      for (let i = 0; i < journal.length; i++) {
        let entry = journal[i],
          index = 0;

        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
      }
      return table;
    }

    console.log(tableFor('pizza', journal));

    function journalEvents(journal) {
      let events = [];
      for (let entry of journal) {
        for (let event of entry.events) {
          if (!events.includes(event)) {
            events.push(event);
          }
        }
      }
      return events;
    }

    console.log(journalEvents(journal));
  }

  ngOnInit(): void {}
}
