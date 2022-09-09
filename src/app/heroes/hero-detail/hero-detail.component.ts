import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => 
    //     this.heroService.getHero(Number(params.get('id')!)))
    //   );
    // CODE ABOVE USED WHEN THERE'S COMPONENT RE-USE

    const id = this.route.snapshot.paramMap.get('id')!;

    this.hero$ = this.heroService.getHero(Number(id));
  }

  gotoHeroes(hero: Hero): void {
    const heroId = hero ? hero.id : null;

    this.router.navigate(['/heroes', { id: heroId }]);
  }

}
