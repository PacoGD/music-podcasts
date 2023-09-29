import { Episode } from "../types";

enum ClosedCaptioning {
  None = "none",
}

enum Name {
  SwitchedOnPop = "Switched on Pop",
}

enum Country {
  Usa = "USA",
}

enum EpisodeContentType {
  Audio = "audio",
}

enum Currency {
  Usd = "USD",
}

enum EpisodeFileExtension {
  Mp3 = "mp3",
}

export interface GenreClass {
  name: PrimaryGenreNameEnum;
  id: string;
}

enum PrimaryGenreNameEnum {
  MusicCommentary = "Music Commentary",
  MusicHistory = "MusicHistory",
}

enum Kind {
  Podcast = "podcast",
  PodcastEpisode = "podcast-episode",
}

enum WrapperType {
  PodcastEpisode = "podcastEpisode",
  Track = "track",
}

export const episodeTestData: Episode[] = [
  {
    wrapperType: WrapperType?.Track,
    kind: Kind?.Podcast,
    collectionId: 1437402802,
    trackId: 1437402802,
    trackTimeMillis: 1437402802,
    artistViewUrl: "artistViewUrl",
    artistName: "Andrew Hickey",
    collectionName: Name?.SwitchedOnPop,
    trackName: "A History of Rock Music in 500 Songs",
    collectionCensoredName: Name?.SwitchedOnPop,
    trackCensoredName: Name?.SwitchedOnPop,
    collectionViewUrl:
      "https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=4",
    feedUrl: "https://500songs.com/feed/podcast/",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=4",
    artworkUrl30:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/30x30bb.jpg",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.jpg",
    artworkUrl100:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/100x100bb.jpg",
    collectionPrice: 0,
    trackPrice: 0,
    collectionHdPrice: 0,
    releaseDate: new Date("2023-09-28T03:34:00Z"),
    collectionExplicitness: "notExplicit",
    trackExplicitness: "cleaned",
    trackCount: 212,
    country: Country?.Usa,
    currency: Currency?.Usd,
    primaryGenreName: PrimaryGenreNameEnum?.MusicCommentary,
    contentAdvisoryRating: "Clean",
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/600x600bb.jpg",
    genreIds: ["1524", "26", "1310", "1324", "1543"],
    genres: [
      "Music History",
      "Podcasts",
      "Music",
      "Society & Culture",
      "Documentary",
    ],
  },
  {
    country: Country?.Usa,
    previewUrl:
      "https://500songs.com/podcast-download/1876/episode-168-i-say-a-little-prayer-by-aretha-franklin.mp3",
    episodeUrl:
      "https://500songs.com/podcast-download/1876/episode-168-i-say-a-little-prayer-by-aretha-franklin.mp3",
    feedUrl: "https://500songs.com/feed/podcast/",
    artistIds: [],
    trackTimeMillis: 1437402802,
    artistViewUrl: "artistViewUrl",
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?mt=2&uo=4",
    closedCaptioning: ClosedCaptioning?.None,
    collectionId: 1437402802,
    collectionName: Name?.SwitchedOnPop,
    episodeFileExtension: EpisodeFileExtension?.Mp3,
    episodeContentType: EpisodeContentType?.Audio,
    artworkUrl600:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/600x600bb.jpg",
    genres: [{ name: PrimaryGenreNameEnum?.MusicHistory, id: "1524" }],
    episodeGuid: "https://500songs.com/?post_type=podcast&p=1876",
    description:
      "Episode 168 of A History of Rock Music in Five Hundred Songs looks at “I Say a Little Prayer”, and the interaction of the sacred, political, and secular in Aretha Franklin's life and work. Click the full post to read liner notes, links to more information, and a transcript of the episode.\n\nPatreon backers also have a forty-five-minute bonus episode available, on \"Abraham, Martin, and John\" by Dion.\n\nTilt Araiza has assisted invaluably by doing a first-pass edit, and will hopefully be doing so from now on. Check out Tilt’s irregular podcasts at [Podnose](http://www.podnose.com/jaffa-cakes-for-proust) and [Sitcom Club](http://sitcomclub.com/).\n\nResources\n\nNo Mixcloud this week, as there are too many songs by Aretha Franklin. Even splitting it into multiple parts would have required six or seven mixes.\n\nMy main biographical source for Aretha Franklin is *Respect: The Life of Aretha Franklin* by David Ritz, and this is where most of the quotes from musicians come from.\n\nInformation on C.L. Franklin came from *Singing in a Strange Land: C. L. Franklin, the Black Church, and the Transformation of America* by Nick Salvatore.\n\n*Country Soul* by Charles L Hughes is a great overview of the soul music made in Muscle Shoals, Memphis, and Nashville in the sixties. Peter Guralnick’s *Sweet Soul Music: Rhythm And Blues And The Southern Dream Of Freedom* is possibly less essential, but still definitely worth reading.\n\nInformation about Martin Luther King came from *Martin Luther King: A Religious Life* by Paul Harvey.\n\nI also referred to Burt Bacharach's autobiography *Anyone Who Had a Heart*, Carole King's autobiography *A Natural Woman*, and *Soul Serenade: King Curtis and his Immortal Saxophone* by Timothy R. Hoover.\n\nFor information about *Amazing Grace* I also used Aaron Cohen's *33 1/3* book on the album. The film of the concerts is also definitely worth watching.\n\nAnd the *Aretha Now* album is available in this five-album box set for a ludicrously cheap price. But it’s actually worth getting this nineteen-CD set with her first sixteen Atlantic albums and a couple of bonus discs of demos and outtakes. There’s barely a duff track in the whole nineteen discs.\n\nPatreon\n\nThis podcast is brought to you by the generosity of my backers on Patreon. Why not join them?\n\nTranscript\n\nA quick warning before I begin. This episode contains some moderate references to domestic abuse, death by cancer, racial violence, police violence, and political assassination. Anyone who might be upset by those subjects might want to check the transcript rather than listening to the episode.\n\nAlso, as with the previous episode on Aretha Franklin, this episode presents something of a problem. Like many people in this narrative, Franklin's career was affected by personal troubles, which shaped many of her decisions. But where most of the subjects of the podcast have chosen to live their lives in public and share intimate details of every aspect of their personal lives, Franklin was an extremely private person, who chose to share only carefully sanitised versions of her life, and tried as far as possible to keep things to herself.\n\nThis of course presents a dilemma for anyone who wants to tell her story -- because even though the information is out there in biographies, and even though she's dead, it's not right to disrespect someone's wish for a private life. I have therefore tried, wherever possible, to stay away from talk of her personal life except where it *absolutely* affects the work, or where other people involved have publicly shared their own stories, and even there I've tried to keep it to a minimum.  This will occasionally lead to me saying less about some topics than other people might, even though the information is easily findable, because I don't think we have an absolute right to invade someone else's privacy for entertainment.\n\nWhen we left Aretha Franklin, she was a young woman who'd released a series of gospel albums, before moving on to become a jazz singer and nightclub entertainer. She'd then signed to Columbia Records, where she'd tried to be a pop singer, but found the songs and arrangements didn't suit her, and was doing OK as a blues singer. She was still, despite her youth, a very experienced musician, with a lot of recording and live performance behind her, and she had a lot of friends in the music business who respected her. But she was very much a work in progress, and she had yet to find the one musical style that suited her best.\n\n\n\n\n\nShe also was a single mother, with two children to look after. She had had her first child at the age of twelve, and her second child at the age of fourteen. When she'd married Ted White at the age of nineteen, it had been against the wishes of her family. White had been a bit of a rough character even before he married Franklin, and Franklin’s family had tried to warn her off him, but she’d gone ahead anyway. He'd been abusive to her from the start, but Franklin had initially been unable to leave him, partly because she felt she had to make the marriage work because of her children, and partly because he had become her manager, and was taking a large cut of her earnings.\n\n\n\n\n\nAretha Franklin was, in short, in a difficult position when we left off. She had a lot of promise, but was struggling to find the right way to express her talent. She was in a bad marriage, and was trapped in that marriage by the children she had had with him. She was also pregnant again.\n\n\n\n\n\nAnd yet she was about to enter the studio and record what many people consider to be not just the greatest album of her career, but one of the greatest albums of all time.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    artworkUrl160:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/160x160bb.jpg",
    releaseDate: new Date("2023-09-28T03:34:04Z"),
    trackId: 1000629467257,
    trackName: "Episode 168: “I Say a Little Prayer” by Aretha Franklin",
    shortDescription:
      "Episode 168 of A History of Rock Music in Five Hundred Songs looks at “I Say a Little Prayer”, and the interaction of the sacred, political, and secular in Aretha Franklin's life and work. Click the full post to read liner notes, links to more inform",
    artworkUrl60:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.png",
    contentAdvisoryRating: "Clean",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/episode-168-i-say-a-little-prayer-by-aretha-franklin/id1437402802?i=1000629467257&uo=4",
    kind: Kind?.PodcastEpisode,
    wrapperType: WrapperType.PodcastEpisode,
  },
];
