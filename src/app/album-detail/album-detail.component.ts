import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumcover: string;
  bg: string;
  // bg: string = "https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg";
  albumToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService) {
              }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
      this.albumcover = urlParameters['albumcover'];
      this.bg = urlParameters['background'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    console.log(this);
  }

}
