import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent implements OnInit {
  crisis$: Observable<Crisis[]> | undefined;
  selectedId = 0;

  constructor(
    private crisisService: CrisisService, 
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getCrises();
  }

  onSelect(crisis: Crisis): void {
    this.messageService.add(`CrisisComponent: Selected crisis id=${crisis.id}`);
  }

  getCrises(): void {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);

        return this.crisisService.getCrises();
      }),
    );
  }
}
