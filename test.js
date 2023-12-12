var SpotifyWebApi = require('spotify-web-api-node');
var http = require('http');
var fs = require("fs");

var spotifyApi = new SpotifyWebApi({
  clientId: '516c5a02c69a42528f49e9816d9fbb00',
  clientSecret: '365f94c53e9644eb8c35d5092ddabd9a',
  redirectUri: 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQCnVT6UoPmrwqYk7f2V-Fdkjjrav3iJBabZz6p0cewScgr6eGMMEfhDnpUqQcyooaNBA_bagNsjd870Mv_5AFhzjXOrqV-PvKbQPtWp3Yq3nLk5xlE');

// 노래 추천 받아오기
spotifyApi.getRecommendations({
  market: "KR",
  min_energy: 0.1,
  max_energy: 0.7,
  min_tempo: 30,
  max_tempo: 130,
  seed_artists: ['6HvZYsbFfjnjFrWF950C9d', '4SpbR6yFEvexJuaBpgAU5p'],
  seed_genres: ['k-pop'],
  seed_tracks: ['5Yb0pbs0dDVdtnQ1rDCuqd', '3a13DbvD4x28pTRWoxKTrv'],
  max_popularity: 100,
  min_popularity: 30
})
  .then(function (data) {
    let recommendations = data.body.tracks.map(track => track.uri);

    // 플레이리스트 생성
    spotifyApi.createPlaylist('jcj140619@g.shingu.ac.kr', 'My Playlist', { 'public': false })
      .then(function (data) {
        let playlistId = data.body.id;

        // 플레이리스트에 곡 추가
        spotifyApi.addTracksToPlaylist(playlistId, recommendations)
          .then(function (data) {
            console.log('Playlist created with tracks added:', data);
          })
          .catch(function (error) {
            console.error('Error adding tracks to playlist:', error);
          });
      })
      .catch(function (error) {
        console.error('Error creating playlist:', error);
      });
  })
  .catch(function (error) {
    console.error('Error getting recommendations:', error);
  });
