// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;

var l_music = true;
var l_musicDisplay = true;

var l_bgImagesRandom = false;
var l_bgImages = [
// ww2
	// "images/ww2/1.jpg",
	// "images/ww2/2.jpg",
	// "images/ww2/3.jpg",
	// "images/ww2/4.jpg",
	// "images/ww2/5.jpg",
	// "images/bok.png",

// main
	"images/bok.png",
	"images/1.png",
	"images/2.png",
	"images/3.png",
	"images/4.png",
	"images/5.png",
	"images/6.png"
];

var l_musicPlaylist = [
// ww2
	// {ogg: "songs/ww2/10Botalyon.mp3", name: ""},
	// {ogg: "songs/ww2/Smuglyanka.mp3", name: ""},
	// {ogg: "songs/ww2/Zemlyanka.mp3", name: ""},


// main
	{ogg: "songs/CigaSolitude.mp3", name: ""},
	{ogg: "songs/CoastTrible.mp3", name: ""},
	{ogg: "songs/Lifelong.mp3", name: ""},
	{ogg: "songs/LikeThat.mp3", name: ""},
	{ogg: "songs/StellarWind.mp3", name: ""},
	{ogg: "songs/JustBreathing.mp3", name: ""},
];

var l_musicRandom = true;
var l_musicVolume = 5;