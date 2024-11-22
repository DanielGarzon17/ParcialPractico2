import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  animeId!:string;
  @Input() animeDetail!: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  getAnime(){
    this.animeService.getAnime(this.animeId).subscribe(apiData => {
      this.animeDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.animeDetail === undefined){
      this.animeId = this.route.snapshot.paramMap.get('id')!
      if(this.animeId){
        this.getAnime();
      }
    }
  }


}
