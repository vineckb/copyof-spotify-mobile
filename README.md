# Music Player

Mobile app of "Music Player", made with React Native.

![Screenshots](https://raw.githubusercontent.com/vineckb/copyof-spotify-mobile/master/screenshots.png)

## Layout specs

(https://www.figma.com/file/tqqxm7dKMDT2h9K67tLgEZ/Music-Player?node-id=0%3A1)[figma.com]

---

## Features

* [] no style libraries(for learning purpose)
* [] facebook authentication
* [] google authentication
* [] works offline
* [] browse platform content
* [] manage my own library
* [] custom settings about data syncing & music player

---

## Pages

### Auth
  * login
    * facebook
    * google

### Discover

Components:

* Grid<GenreListItem>

### Search

Components:

* Musics
  * HorizontalList<MusicListItem>
* Artists
  * HorizontalList<ListItem>
* Albums
  * HorizontalList<ListItem>
* Playlists
  * HorizontalList<ListItem>


### Library

Components:

* TabNavigation
  * Playlists
    * LibrarySearch
    * VerticalList<ListItem>
  * Artists
    * VerticalList<ListItem>
  * Albums
    * LibrarySearch
    * VerticalList<ListItem>
  * Musics

### Genre

Components:

* GenreItem

### Playlist

Components:

* PlaylistItem

### Artist

Components:

* ArtistItem

### Album

Components:

* AlbumItem

---

## Components

### GenreItem

Components:

* Playlists
  * HorizontalList<ListItem>
* Featureds
  * HorizontalList<MusicListItem>
* Latest
  * HorizontalList<MusicListItem>
* Artists
  * HorizontalList<ListItem>
* Albums
  * HorizontalList<ListItem>


### GenreListItem

Card with cover & title of genre

### Player
### VerticalList
### HorizontalList
### PlaylistItem
### AlbumItem
### ArtistItem

## Roadmap

* [] prototype static screens
* [] setup & make tests
* [] setup & write documentation
* [] develop music player
* [] authentication things
* [] feth data from api
* [] integrate all back & front features
* [] setup & run deploy
* [] publish on play store
* [] build & publish on ios 