# \#Copyof Spotify

A minimalist remake of spotify mobile app made with React Native.

![Screenshots](https://raw.githubusercontent.com/vineckb/copyof-spotify-mobile/master/screenshots.png)

## Layout specs

(https://www.figma.com/file/tqqxm7dKMDT2h9K67tLgEZ/Music-Player?node-id=0%3A1)[figma.com]

---

## Features

* [ ] facebook authentication
* [ ] google authentication
* [ ] works offline
* [ ] browse platform content
* [ ] manage my own library
* [ ] custom settings about data syncing & music player

---

## Pages

### Auth
  * login
    * facebook
    * google

### Discover

Components:

* List<GenreListItem>

### Search

Components:

* Musics
  * HorizontalList<MusicListItem>
* Artists
  * HorizontalList<ArtistListItem>
* Albums
  * HorizontalList<AlbumListItem>
* Playlists
  * HorizontalList<PlaylistListItem>


### Library

Components:

* TabNavigation
  * Playlists
    * LibrarySearch
    * VerticalList<PlaylistListItem>
  * Artists
    * VerticalList<ArtistListItem>
  * Albums
    * LibrarySearch
    * VerticalList<AlbumListItem>
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
  * HorizontalList<PlaylistListItem>
* Featureds
  * HorizontalList<MusicListItem>
* Latest
  * HorizontalList<MusicListItem>
* Artists
  * HorizontalList<ArtistListItem>
* Albums
  * HorizontalList<AlbumListItem>


### GenreListItem

Card with cover & title of genre

### Player

### VerticalList
### HorizontalList

### PlaylistListItem
### PlaylistItem

### AlbumListItem
### AlbumItem

### ArtistListItem
### ArtistItem

### MusicListItem

