var express = require('express');
var request = require('request');
var config = require('../helpers/config');
var app = express();
var deepExtend = require('deep-extend');
var Mangony = require('mangony');
var mangonyOptions = require('../helpers/_grunt/mangony');
var mangonyDevOptions = deepExtend(mangonyOptions.dev.options, {
	devServer: {
		express: app
	}
});
var mangonyServer = new Mangony(deepExtend(mangonyOptions.options, mangonyDevOptions));

/**
 * Register routes and start express server
 *
 */
mangonyServer.render();


/**
 * parameter passing from grunt
 * @type {Array}
 */
var args = process.argv;
/**
 * the keys of apiServerHosts are
 * used to implement the routing
 * localhost:[port]/veams is proxied
 * to https://github.com/Veams
 * @type {Object}
 */
var apiServerHosts = {
	'veams': 'https://github.com/Veams'
};

var apiServerHostRoutes = [];

Object.keys(apiServerHosts).forEach(function (route) {
	apiServerHostRoutes.push('/' + route);
	apiServerHostRoutes.push('/' + route + '.json');
});

app.use(apiServerHostRoutes, function (req, res) {
	var key, url;
	var format = '';

	key = req.originalUrl.substring(1, req.originalUrl.length);

	if (key.indexOf('.json') !== -1) {
		key = key.replace('.json', '');
		format = '.json';
	}

	url = apiServerHosts[key] + req.url + format;

	req.pipe(request(url)).pipe(res);
});


// an example route for an API
app.get('/giphys.json', function (req, res) {
	var responseObject = {
		"data": [{
			"type": "gif",
			"id": "rjkJD1v80CjYs",
			"slug": "rjkJD1v80CjYs",
			"url": "https:\/\/giphy.com\/gifs\/rjkJD1v80CjYs",
			"bitly_gif_url": "http:\/\/gph.is\/1QmzWeT",
			"bitly_url": "http:\/\/gph.is\/1QmzWeT",
			"embed_url": "https:\/\/giphy.com\/embed\/rjkJD1v80CjYs",
			"username": "",
			"source": "http:\/\/www.reddit.com\/r\/reactiongifs\/comments\/3wyv8v\/mrw_my_girlfriend_tells_me_to_sit_on_my_hands_so\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reddit.com",
			"source_post_url": "http:\/\/www.reddit.com\/r\/reactiongifs\/comments\/3wyv8v\/mrw_my_girlfriend_tells_me_to_sit_on_my_hands_so\/",
			"is_indexable": 1,
			"import_datetime": "2015-12-15 18:15:02",
			"trending_datetime": "2017-08-21 02:15:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245"
				},
				"fixed_width": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "1167905",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "102370",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "495220"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "154240",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "61864"
				},
				"preview": {
					"width": "170",
					"height": "170",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "44419"
				},
				"fixed_height_small": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "319594",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38078",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "169212"
				},
				"downsized_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245",
					"size": "39035"
				},
				"downsized": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245",
					"size": "1882581"
				},
				"downsized_large": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245",
					"size": "1882581"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"preview_webp": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "126",
					"height": "126",
					"size": "48484"
				},
				"fixed_width_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"480w_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "480",
					"size": "27719"
				},
				"fixed_width_small": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "319594",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38078",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "169212"
				},
				"downsized_small": {
					"width": "244",
					"height": "244",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "167540"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "154240",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "61864"
				},
				"downsized_medium": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245",
					"size": "1882581"
				},
				"original": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "245",
					"size": "1882581",
					"frames": "48",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "444616",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "829130"
				},
				"fixed_height": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "1167905",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "102370",
					"webp": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "495220"
				},
				"looping": {
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2422504"
				},
				"original_mp4": {
					"width": "480",
					"height": "480",
					"mp4": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "444616"
				},
				"preview_gif": {
					"url": "https:\/\/media0.giphy.com\/media\/rjkJD1v80CjYs\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "87",
					"height": "87",
					"size": "48423"
				}
			}
		}, {
			"type": "gif",
			"id": "5GoVLqeAOo6PK",
			"slug": "excited-screaming-jonah-hill-5GoVLqeAOo6PK",
			"url": "https:\/\/giphy.com\/gifs\/excited-screaming-jonah-hill-5GoVLqeAOo6PK",
			"bitly_gif_url": "http:\/\/gph.is\/15RTH5O",
			"bitly_url": "http:\/\/gph.is\/15RTH5O",
			"embed_url": "https:\/\/giphy.com\/embed\/5GoVLqeAOo6PK",
			"username": "",
			"source": "http:\/\/www.reddit.com\/r\/cfbmemes\/comments\/z2nzh\/how_i_felt_waking_up_this_morning_realizing_were\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reddit.com",
			"source_post_url": "http:\/\/www.reddit.com\/r\/cfbmemes\/comments\/z2nzh\/how_i_felt_waking_up_this_morning_realizing_were\/",
			"is_indexable": 1,
			"import_datetime": "2013-09-24 19:21:17",
			"trending_datetime": "2017-08-21 02:00:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "256",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "156",
					"size": "313032",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "28173",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "131716"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "128",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "256",
					"height": "200",
					"size": "205889",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "74458"
				},
				"preview": {
					"width": "236",
					"height": "184",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38101"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "128",
					"height": "100",
					"size": "138015",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "15467",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "66776"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185",
					"size": "32636"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185",
					"size": "486004"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185",
					"size": "486004"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "78"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "135",
					"height": "105",
					"size": "49158"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "156"
				},
				"480w_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "479",
					"height": "374",
					"size": "23221"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "78",
					"size": "89633",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "11701",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "47586"
				},
				"downsized_small": {
					"width": "236",
					"height": "184",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38101"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "156",
					"size": "131871",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "52712"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185",
					"size": "486004"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "237",
					"height": "185",
					"size": "486004",
					"frames": "15",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "105735",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "185214"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "256",
					"height": "200",
					"size": "489153",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38475",
					"webp": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "186362"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1502693"
				},
				"original_mp4": {
					"width": "480",
					"height": "374",
					"mp4": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "105735"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/5GoVLqeAOo6PK\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "78",
					"size": "49567"
				}
			}
		}, {
			"type": "gif",
			"id": "3NtY188QaxDdC",
			"slug": "3NtY188QaxDdC",
			"url": "https:\/\/giphy.com\/gifs\/3NtY188QaxDdC",
			"bitly_gif_url": "http:\/\/gph.is\/1OwKx4L",
			"bitly_url": "http:\/\/gph.is\/1OwKx4L",
			"embed_url": "https:\/\/giphy.com\/embed\/3NtY188QaxDdC",
			"username": "disneyzootopia",
			"source": "http:\/\/di.sn\/6000BbvgY",
			"rating": "g",
			"content_url": "",
			"source_tld": "di.sn",
			"source_post_url": "http:\/\/di.sn\/6000BbvgY",
			"is_indexable": 1,
			"import_datetime": "2016-01-05 10:24:56",
			"trending_datetime": "2017-08-20 19:15:01",
			"user": {
				"avatar_url": "https:\/\/media.giphy.com\/avatars\/disneyzootopia\/Ey3noE71nXo7.jpg",
				"banner_url": "https:\/\/media.giphy.com\/headers\/disneyzootopia\/1cMeSj4IhpBh.jpg",
				"profile_url": "https:\/\/giphy.com\/disneyzootopia\/",
				"username": "disneyzootopia",
				"display_name": "Disney Zootopia",
				"twitter": "@DisneyZootopia"
			},
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "427",
					"height": "427"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "1079606",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39457",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "814266"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "127047",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "54896"
				},
				"preview": {
					"width": "304",
					"height": "304",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "17731"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "289907",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "13288",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "291732"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "250",
					"size": "41598"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "250",
					"size": "1084074"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "427",
					"height": "427",
					"size": "3306723"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "141",
					"height": "141",
					"size": "49976"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"480w_still": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "480",
					"size": "30357"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "289907",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "13288",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "291732"
				},
				"downsized_small": {
					"width": "382",
					"height": "382",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "140649"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "127047",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "54896"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "427",
					"height": "427",
					"size": "3306723"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "427",
					"height": "427",
					"size": "3306723",
					"frames": "95",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "269366",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "3629648"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "1079606",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39457",
					"webp": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "814266"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1203406"
				},
				"original_mp4": {
					"width": "480",
					"height": "478",
					"mp4": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "269366"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/3NtY188QaxDdC\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "122",
					"height": "122",
					"size": "48175"
				}
			}
		}, {
			"type": "gif",
			"id": "B0vFTrb0ZGDf2",
			"slug": "city-bus-doll-B0vFTrb0ZGDf2",
			"url": "https:\/\/giphy.com\/gifs\/city-bus-doll-B0vFTrb0ZGDf2",
			"bitly_gif_url": "http:\/\/gph.is\/1kURzBM",
			"bitly_url": "http:\/\/gph.is\/1kURzBM",
			"embed_url": "https:\/\/giphy.com\/embed\/B0vFTrb0ZGDf2",
			"username": "",
			"source": "http:\/\/www.gifbay.com\/gif\/when_i_am_getting_off_the_city_bus_and_i_say_thanks_to_the_bus_driver_and_the_old_man_replies_youre_welcome_doll-137516\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.gifbay.com",
			"source_post_url": "http:\/\/www.gifbay.com\/gif\/when_i_am_getting_off_the_city_bus_and_i_say_thanks_to_the_bus_driver_and_the_old_man_replies_youre_welcome_doll-137516\/",
			"is_indexable": 1,
			"import_datetime": "2014-06-14 18:48:05",
			"trending_datetime": "2017-08-20 17:30:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "380",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242"
				},
				"fixed_width": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "105",
					"size": "74046",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "28128",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "146398"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "190",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "380",
					"height": "200",
					"size": "346378",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "150898"
				},
				"preview": {
					"width": "288",
					"height": "150",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39847"
				},
				"fixed_height_small": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "190",
					"height": "100",
					"size": "191625",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "88878",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "105068"
				},
				"downsized_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242",
					"size": "61623"
				},
				"downsized": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242",
					"size": "528860"
				},
				"downsized_large": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242",
					"size": "528860"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "53"
				},
				"preview_webp": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "184",
					"height": "97",
					"size": "49592"
				},
				"fixed_width_still": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "105"
				},
				"fixed_width_small": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "53",
					"size": "74046",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "35564",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "38398"
				},
				"downsized_small": {
					"width": "460",
					"height": "242",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "125853"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "105",
					"size": "124272",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "48824"
				},
				"downsized_medium": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242",
					"size": "528860"
				},
				"original": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "460",
					"height": "242",
					"size": "528860",
					"frames": "18",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "86835",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "418930"
				},
				"fixed_height": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "380",
					"height": "200",
					"size": "191625",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "19799",
					"webp": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "451672"
				},
				"looping": {
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "3820040"
				},
				"original_mp4": {
					"width": "480",
					"height": "252",
					"mp4": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "86835"
				},
				"preview_gif": {
					"url": "https:\/\/media3.giphy.com\/media\/B0vFTrb0ZGDf2\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "175",
					"height": "92",
					"size": "48087"
				}
			}
		}, {
			"type": "gif",
			"id": "l3q2Z6S6n38zjPswo",
			"slug": "reactionseditor-guy-celebrate-l3q2Z6S6n38zjPswo",
			"url": "https:\/\/giphy.com\/gifs\/reactionseditor-guy-celebrate-l3q2Z6S6n38zjPswo",
			"bitly_gif_url": "http:\/\/gph.is\/2jFfZBS",
			"bitly_url": "http:\/\/gph.is\/2jFfZBS",
			"embed_url": "https:\/\/giphy.com\/embed\/l3q2Z6S6n38zjPswo",
			"username": "",
			"source": "http:\/\/www.reactiongifs.com\/happy-4\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reactiongifs.com",
			"source_post_url": "http:\/\/www.reactiongifs.com\/happy-4\/",
			"is_indexable": 1,
			"import_datetime": "2017-01-13 18:10:39",
			"trending_datetime": "2017-08-19 07:30:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "267",
					"height": "200",
					"size": "23625"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "360",
					"height": "270",
					"size": "43320"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150",
					"size": "1346835",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "123045",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1070526"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "134",
					"height": "100",
					"size": "6957"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "267",
					"height": "200",
					"size": "140302",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "91604"
				},
				"preview": {
					"width": "158",
					"height": "118",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34151"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "134",
					"height": "100",
					"size": "639869",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "65223",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "558562"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "187",
					"size": "22114"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "187",
					"size": "1086932"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "360",
					"height": "270",
					"size": "4812368"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "75",
					"size": "4475"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "137",
					"height": "103",
					"size": "48598"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150",
					"size": "13549"
				},
				"480w_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "360",
					"size": "26988"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "75",
					"size": "376277",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39135",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "369074"
				},
				"downsized_small": {
					"width": "160",
					"height": "120",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "96808"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150",
					"size": "78929",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "53686"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "360",
					"height": "270",
					"size": "4812368"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "360",
					"height": "270",
					"size": "4812368",
					"frames": "119",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "835013",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "3502654",
					"hash": "acedf88e9f9b6129029c749dc283b7a9"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "267",
					"height": "200",
					"size": "2529923",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "183549",
					"webp": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1832776"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2484782"
				},
				"original_mp4": {
					"width": "480",
					"height": "360",
					"mp4": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "835013"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/l3q2Z6S6n38zjPswo\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "124",
					"height": "93",
					"size": "46304"
				}
			}
		}, {
			"type": "gif",
			"id": "TdfyKrN7HGTIY",
			"slug": "happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY",
			"url": "https:\/\/giphy.com\/gifs\/happy-spongebob-squarepants-patrick-TdfyKrN7HGTIY",
			"bitly_gif_url": "http:\/\/gph.is\/1aRyN80",
			"bitly_url": "http:\/\/gph.is\/1aRyN80",
			"embed_url": "https:\/\/giphy.com\/embed\/TdfyKrN7HGTIY",
			"username": "",
			"source": "https:\/\/www.youtube.com\/watch?v=q3-HG8zCoZA",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.youtube.com",
			"source_post_url": "https:\/\/www.youtube.com\/watch?v=q3-HG8zCoZA",
			"is_indexable": 1,
			"import_datetime": "2013-06-27 17:06:03",
			"trending_datetime": "2017-08-19 05:00:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "350",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "114",
					"size": "57301",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "31606",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "102024"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "175",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "350",
					"height": "200",
					"size": "213332",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "109362"
				},
				"preview": {
					"width": "304",
					"height": "172",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "36455"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "175",
					"height": "100",
					"size": "144701",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "54801",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "72332"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286",
					"size": "39060"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286",
					"size": "460878"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286",
					"size": "460878"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "57"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "213",
					"height": "122",
					"size": "48604"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "114"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "57",
					"size": "57301",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "30103",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "32668"
				},
				"downsized_small": {
					"width": "500",
					"height": "286",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "134025"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "114",
					"size": "88642",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "39694"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286",
					"size": "460878"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "286",
					"size": "460878",
					"frames": "15",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "78471",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "448318"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "350",
					"height": "200",
					"size": "144701",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "23367",
					"webp": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "277880"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "3832708"
				},
				"original_mp4": {
					"width": "480",
					"height": "274",
					"mp4": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "78471"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/TdfyKrN7HGTIY\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "203",
					"height": "116",
					"size": "49973"
				}
			}
		}, {
			"type": "gif",
			"id": "P8MxmGnjmytws",
			"slug": "happy-smile-P8MxmGnjmytws",
			"url": "https:\/\/giphy.com\/gifs\/happy-smile-P8MxmGnjmytws",
			"bitly_gif_url": "http:\/\/gph.is\/1hdYhiu",
			"bitly_url": "http:\/\/gph.is\/1hdYhiu",
			"embed_url": "https:\/\/giphy.com\/embed\/P8MxmGnjmytws",
			"username": "",
			"source": "http:\/\/reactiongifs.me\/happy-carlton-banks\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "reactiongifs.me",
			"source_post_url": "http:\/\/reactiongifs.me\/happy-carlton-banks\/",
			"is_indexable": 0,
			"import_datetime": "2014-01-12 19:27:11",
			"trending_datetime": "2017-08-18 22:45:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "298",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "188"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "134",
					"size": "1056790",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "44149",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "379860"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "149",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "298",
					"height": "200",
					"size": "230649",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "123158"
				},
				"preview": {
					"width": "224",
					"height": "150",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38359"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "149",
					"height": "100",
					"size": "625978",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "30647",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "235704"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-tumblr_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "167"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-tumblr.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "167",
					"size": "1597694"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "188",
					"size": "2007943"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "67"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "171",
					"height": "115",
					"size": "49842"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "134"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "67",
					"size": "317633",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "18687",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "125148"
				},
				"downsized_small": {
					"width": "247",
					"height": "166",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "102215"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "134",
					"size": "109493",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "58660"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "188",
					"size": "2007943"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "188",
					"size": "2007943",
					"frames": "55",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "258373",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "748452"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "298",
					"height": "200",
					"size": "2198969",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "75461",
					"webp": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "741314"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "825208"
				},
				"original_mp4": {
					"width": "480",
					"height": "322",
					"mp4": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "258373"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/P8MxmGnjmytws\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "134",
					"height": "90",
					"size": "49887"
				}
			}
		}, {
			"type": "gif",
			"id": "LSNqpYqGRqwrS",
			"slug": "reaction-spoilers-outlander-LSNqpYqGRqwrS",
			"url": "https:\/\/giphy.com\/gifs\/reaction-spoilers-outlander-LSNqpYqGRqwrS",
			"bitly_gif_url": "http:\/\/gph.is\/1pGcSVi",
			"bitly_url": "http:\/\/gph.is\/1pGcSVi",
			"embed_url": "https:\/\/giphy.com\/embed\/LSNqpYqGRqwrS",
			"username": "",
			"source": "http:\/\/thats-normal.com\/2014\/09\/outlander-spoilers-gif-reaction-post\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "thats-normal.com",
			"source_post_url": "http:\/\/thats-normal.com\/2014\/09\/outlander-spoilers-gif-reaction-post\/",
			"is_indexable": 1,
			"import_datetime": "2014-10-01 18:01:18",
			"trending_datetime": "2017-08-18 12:15:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "227614",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41957",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "189516"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200",
					"size": "222997",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "172424"
				},
				"preview": {
					"width": "184",
					"height": "102",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "44291"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100",
					"size": "175670",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "37736",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "150092"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169",
					"size": "511257"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169",
					"size": "511257"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "131",
					"height": "74",
					"size": "49346"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113"
				},
				"480w_still": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "479",
					"height": "270",
					"size": "27230"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56",
					"size": "61039",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "16203",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "55430"
				},
				"downsized_small": {
					"width": "300",
					"height": "168",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "130254"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "77034",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "63370"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169",
					"size": "511257"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "169",
					"size": "511257",
					"frames": "18",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "197832",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "416804"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200",
					"size": "659010",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "104782",
					"webp": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "517390"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2145996"
				},
				"original_mp4": {
					"width": "480",
					"height": "270",
					"mp4": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "197832"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/LSNqpYqGRqwrS\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "122",
					"height": "69",
					"size": "49372"
				}
			}
		}, {
			"type": "gif",
			"id": "xSM46ernAUN3y",
			"slug": "stoner-sees-isopropyl-xSM46ernAUN3y",
			"url": "https:\/\/giphy.com\/gifs\/stoner-sees-isopropyl-xSM46ernAUN3y",
			"bitly_gif_url": "http:\/\/gph.is\/2ld8o22",
			"bitly_url": "http:\/\/gph.is\/2ld8o22",
			"embed_url": "https:\/\/giphy.com\/embed\/xSM46ernAUN3y",
			"username": "",
			"source": "https:\/\/www.reddit.com\/r\/reactiongifs\/comments\/5shj6t\/my_stoner_cashiers_reaction_when_he_sees_epsom\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reddit.com",
			"source_post_url": "https:\/\/www.reddit.com\/r\/reactiongifs\/comments\/5shj6t\/my_stoner_cashiers_reaction_when_he_sees_epsom\/",
			"is_indexable": 1,
			"import_datetime": "2017-02-06 22:48:19",
			"trending_datetime": "2017-08-18 11:30:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "191",
					"height": "200",
					"size": "31004"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "256",
					"size": "50558"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "209",
					"size": "3411169",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "90679",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1043854"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "96",
					"height": "100",
					"size": "9354"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "191",
					"height": "200",
					"size": "175516",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "52450"
				},
				"preview": {
					"width": "194",
					"height": "204",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "27351"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "96",
					"height": "100",
					"size": "853560",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "40760",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "335258"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "239",
					"height": "250",
					"size": "49304"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "239",
					"height": "250",
					"size": "1304261"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "256",
					"size": "5179292"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "105",
					"size": "10101"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "115",
					"height": "120",
					"size": "48434"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "209",
					"size": "33824"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "105",
					"size": "933341",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "46321",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "369726"
				},
				"downsized_small": {
					"width": "244",
					"height": "256",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "152786"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "209",
					"size": "190372",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "57118"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-downsized-medium.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "256",
					"size": "3721919"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "245",
					"height": "256",
					"size": "5179292",
					"frames": "113",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "357526",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1572038",
					"hash": "ea2416c3480a4fd53bdf1116ae05df29"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "191",
					"height": "200",
					"size": "3135187",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "87356",
					"webp": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "959150"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "977926"
				},
				"original_mp4": {
					"width": "480",
					"height": "500",
					"mp4": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "357526"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/xSM46ernAUN3y\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "76",
					"height": "79",
					"size": "47857"
				}
			}
		}, {
			"type": "gif",
			"id": "26BkNItrjPoIhB4Bi",
			"slug": "rupaulsdragrace-rupauls-drag-race-rupaul-logo-tv-26BkNItrjPoIhB4Bi",
			"url": "https:\/\/giphy.com\/gifs\/rupaulsdragrace-rupauls-drag-race-rupaul-logo-tv-26BkNItrjPoIhB4Bi",
			"bitly_gif_url": "http:\/\/gph.is\/1gHtZcc",
			"bitly_url": "http:\/\/gph.is\/1gHtZcc",
			"embed_url": "https:\/\/giphy.com\/embed\/26BkNItrjPoIhB4Bi",
			"username": "rupaulsdragrace",
			"source": "http:\/\/www.logotv.com\/shows\/rupauls-drag-race-ruvealed\/",
			"rating": "pg",
			"content_url": "",
			"source_tld": "www.logotv.com",
			"source_post_url": "http:\/\/www.logotv.com\/shows\/rupauls-drag-race-ruvealed\/",
			"is_indexable": 0,
			"import_datetime": "2015-09-21 20:17:36",
			"trending_datetime": "2017-08-18 11:15:01",
			"user": {
				"avatar_url": "https:\/\/media.giphy.com\/channel_assets\/rupaulsdragrace\/ovW8qDqjtrZX.jpg",
				"banner_url": "https:\/\/media.giphy.com\/headers\/rupaulsdragrace\/ONLLI5hATv4i.gif",
				"profile_url": "https:\/\/giphy.com\/rupaulsdragrace\/",
				"username": "rupaulsdragrace",
				"display_name": "RuPaul's Drag Race",
				"twitter": "RuPaulsDragRace"
			},
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270"
				},
				"fixed_width": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "599368",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41191",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "186988"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200",
					"size": "286345",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "71744"
				},
				"preview": {
					"width": "200",
					"height": "112",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41656"
				},
				"fixed_height_small": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100",
					"size": "501203",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "33605",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "157702"
				},
				"downsized_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "140",
					"size": "25552"
				},
				"downsized": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "140",
					"size": "878700"
				},
				"downsized_large": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "3109207"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56"
				},
				"preview_webp": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "206",
					"height": "116",
					"size": "49566"
				},
				"fixed_width_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113"
				},
				"480w_still": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "16903"
				},
				"fixed_width_small": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56",
					"size": "180257",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "14264",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "66412"
				},
				"downsized_small": {
					"width": "480",
					"height": "270",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "182082"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "101949",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "30604"
				},
				"downsized_medium": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "3109207"
				},
				"original": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "3109207",
					"frames": "35",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "183818",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "738208"
				},
				"fixed_height": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200",
					"size": "1695812",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "106112",
					"webp": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "440078"
				},
				"looping": {
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2317558"
				},
				"original_mp4": {
					"width": "480",
					"height": "270",
					"mp4": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "183818"
				},
				"preview_gif": {
					"url": "https:\/\/media0.giphy.com\/media\/26BkNItrjPoIhB4Bi\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "108",
					"height": "61",
					"size": "49449"
				}
			}
		}, {
			"type": "gif",
			"id": "l46CkATpdyLwLI7vi",
			"slug": "yosub-birthday-l46CkATpdyLwLI7vi",
			"url": "https:\/\/giphy.com\/gifs\/yosub-birthday-l46CkATpdyLwLI7vi",
			"bitly_gif_url": "http:\/\/gph.is\/28LuUpP",
			"bitly_url": "http:\/\/gph.is\/28LuUpP",
			"embed_url": "https:\/\/giphy.com\/embed\/l46CkATpdyLwLI7vi",
			"username": "",
			"source": "https:\/\/reactiongifs.com",
			"rating": "g",
			"content_url": "",
			"source_tld": "reactiongifs.com",
			"source_post_url": "https:\/\/reactiongifs.com",
			"is_indexable": 1,
			"import_datetime": "2016-06-20 19:35:10",
			"trending_datetime": "2017-08-18 10:00:01",
			"images": {
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "266",
					"height": "200",
					"size": "485194",
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "68578",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "272902"
				},
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "266",
					"height": "200"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "266",
					"height": "200",
					"size": "110651",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "60724"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150",
					"size": "310218",
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "48588",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "182102"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "150",
					"size": "70572",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "40292"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "133",
					"height": "100",
					"size": "168186",
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "29737",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "103674"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "133",
					"height": "100"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "75",
					"size": "106512",
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "20298",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "68602"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "75"
				},
				"downsized": {
					"url": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242",
					"size": "619900"
				},
				"downsized_still": {
					"url": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242",
					"size": "26017"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242",
					"size": "619900"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242",
					"size": "619900"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242",
					"size": "619900",
					"frames": "28",
					"mp4": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "192824",
					"webp": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "373120"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "322",
					"height": "242"
				},
				"looping": {
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1090083"
				},
				"original_mp4": {
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "192824",
					"width": "480",
					"height": "360"
				},
				"preview": {
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "38430",
					"width": "190",
					"height": "142"
				},
				"downsized_small": {
					"mp4": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "141531",
					"width": "322",
					"height": "242"
				},
				"preview_gif": {
					"url": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "113",
					"height": "85",
					"size": "49949"
				},
				"preview_webp": {
					"url": "https:\/\/media0.giphy.com\/media\/l46CkATpdyLwLI7vi\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "156",
					"height": "117",
					"size": "49076"
				}
			}
		}, {
			"type": "gif",
			"id": "3ornjXIIShZ2MgyyHu",
			"slug": "thevoice-the-voice-nbc-3ornjXIIShZ2MgyyHu",
			"url": "https:\/\/giphy.com\/gifs\/thevoice-the-voice-nbc-3ornjXIIShZ2MgyyHu",
			"bitly_gif_url": "http:\/\/gph.is\/1TTFZHJ",
			"bitly_url": "http:\/\/gph.is\/1TTFZHJ",
			"embed_url": "https:\/\/giphy.com\/embed\/3ornjXIIShZ2MgyyHu",
			"username": "thevoice",
			"source": "http:\/\/www.nbc.com\/the-voice",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.nbc.com",
			"source_post_url": "http:\/\/www.nbc.com\/the-voice",
			"is_indexable": 0,
			"import_datetime": "2016-03-03 03:07:26",
			"trending_datetime": "2017-08-18 09:15:01",
			"user": {
				"avatar_url": "https:\/\/media.giphy.com\/avatars\/thevoice\/n2FZagRbHud1.jpg",
				"banner_url": "",
				"profile_url": "https:\/\/giphy.com\/thevoice\/",
				"username": "thevoice",
				"display_name": "The Voice",
				"twitter": "@NBCTheVoice"
			},
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "112",
					"size": "89233",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "10589",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "42132"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200",
					"size": "200010",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "76500"
				},
				"preview": {
					"width": "500",
					"height": "280",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "42849"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100",
					"size": "75203",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "9485",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "38786"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281",
					"size": "65177"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281",
					"size": "504434"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281",
					"size": "504434"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "276",
					"height": "155",
					"size": "49048"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "112"
				},
				"480w_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "14754"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56",
					"size": "26324",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "4846",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "16836"
				},
				"downsized_small": {
					"width": "500",
					"height": "280",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "42849"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "112",
					"size": "68207",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "31918"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281",
					"size": "504434"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "281",
					"size": "504434",
					"frames": "8",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "35352",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "173960"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "200",
					"size": "261286",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "22093",
					"webp": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "101488"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "930064"
				},
				"original_mp4": {
					"width": "480",
					"height": "268",
					"mp4": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "35352"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/3ornjXIIShZ2MgyyHu\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "165",
					"height": "93",
					"size": "49897"
				}
			}
		}, {
			"type": "gif",
			"id": "N1eKZPdggHGwM",
			"slug": "city-relate-outgoing-N1eKZPdggHGwM",
			"url": "https:\/\/giphy.com\/gifs\/city-relate-outgoing-N1eKZPdggHGwM",
			"bitly_gif_url": "http:\/\/gph.is\/1N54xYX",
			"bitly_url": "http:\/\/gph.is\/1N54xYX",
			"embed_url": "https:\/\/giphy.com\/embed\/N1eKZPdggHGwM",
			"username": "",
			"source": "http:\/\/www.lifegag.com\/15-sex-and-the-city-quotes-that-every-outgoing-girl-will-relate-to\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.lifegag.com",
			"source_post_url": "http:\/\/www.lifegag.com\/15-sex-and-the-city-quotes-that-every-outgoing-girl-will-relate-to\/",
			"is_indexable": 0,
			"import_datetime": "2015-08-03 19:16:23",
			"trending_datetime": "2017-08-18 01:00:02",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "246",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255"
				},
				"fixed_width": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "162",
					"size": "1653572",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39581",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "556374"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "123",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "246",
					"height": "200",
					"size": "219245",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "72422"
				},
				"preview": {
					"width": "220",
					"height": "176",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "42820"
				},
				"fixed_height_small": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "123",
					"height": "100",
					"size": "785344",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "19729",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "283184"
				},
				"downsized_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255",
					"size": "29888"
				},
				"downsized": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255",
					"size": "898885"
				},
				"downsized_large": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255",
					"size": "898885"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "81"
				},
				"preview_webp": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "149",
					"height": "121",
					"size": "48468"
				},
				"fixed_width_still": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "162"
				},
				"fixed_width_small": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "81",
					"size": "560108",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "15210",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "201090"
				},
				"downsized_small": {
					"width": "314",
					"height": "254",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "100439"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "162",
					"size": "156531",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "52346"
				},
				"downsized_medium": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255",
					"size": "898885"
				},
				"original": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "314",
					"height": "255",
					"size": "898885",
					"frames": "65",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "161738",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1072228"
				},
				"fixed_height": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "246",
					"height": "200",
					"size": "2335744",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "51841",
					"webp": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "762676"
				},
				"looping": {
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1372194"
				},
				"original_mp4": {
					"width": "480",
					"height": "388",
					"mp4": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "161738"
				},
				"preview_gif": {
					"url": "https:\/\/media3.giphy.com\/media\/N1eKZPdggHGwM\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "134",
					"height": "109",
					"size": "48143"
				}
			}
		}, {
			"type": "gif",
			"id": "6nuiJjOOQBBn2",
			"slug": "party-how-i-met-your-mother-applause-6nuiJjOOQBBn2",
			"url": "https:\/\/giphy.com\/gifs\/party-how-i-met-your-mother-applause-6nuiJjOOQBBn2",
			"bitly_gif_url": "http:\/\/gph.is\/15skNic",
			"bitly_url": "http:\/\/gph.is\/15skNic",
			"embed_url": "https:\/\/giphy.com\/embed\/6nuiJjOOQBBn2",
			"username": "",
			"source": "",
			"rating": "g",
			"content_url": "",
			"source_tld": "",
			"source_post_url": "",
			"is_indexable": 0,
			"import_datetime": "2013-07-29 23:51:22",
			"trending_datetime": "2017-08-16 14:04:06",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "349",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172"
				},
				"fixed_width": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "115",
					"size": "214927",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "33272",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "185950"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "174",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "349",
					"height": "200",
					"size": "117179",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "88138"
				},
				"preview": {
					"width": "212",
					"height": "120",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "33272"
				},
				"fixed_height_small": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "174",
					"height": "100",
					"size": "157434",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "25806",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "141106"
				},
				"downsized_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172",
					"size": "14108"
				},
				"downsized": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172",
					"size": "489674"
				},
				"downsized_large": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172",
					"size": "489674"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "57"
				},
				"preview_webp": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "188",
					"height": "108",
					"size": "47242"
				},
				"fixed_width_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "115"
				},
				"480w_still": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "275",
					"size": "12726"
				},
				"fixed_width_small": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "57",
					"size": "62184",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "12423",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "61880"
				},
				"downsized_small": {
					"width": "300",
					"height": "172",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "98730"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "115",
					"size": "40583",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "34244"
				},
				"downsized_medium": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172",
					"size": "489674"
				},
				"original": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "300",
					"height": "172",
					"size": "489674",
					"frames": "32",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "139969",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "366946"
				},
				"fixed_height": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "349",
					"height": "200",
					"size": "625161",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "70607",
					"webp": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "479198"
				},
				"looping": {
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1284431"
				},
				"original_mp4": {
					"width": "480",
					"height": "274",
					"mp4": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "139969"
				},
				"preview_gif": {
					"url": "https:\/\/media3.giphy.com\/media\/6nuiJjOOQBBn2\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "169",
					"height": "97",
					"size": "49203"
				}
			}
		}, {
			"type": "gif",
			"id": "yoJC2GnSClbPOkV0eA",
			"slug": "excited-birthday-yeah-yoJC2GnSClbPOkV0eA",
			"url": "https:\/\/giphy.com\/gifs\/excited-birthday-yeah-yoJC2GnSClbPOkV0eA",
			"bitly_gif_url": "http:\/\/gph.is\/1IH3RW6",
			"bitly_url": "http:\/\/gph.is\/1IH3RW6",
			"embed_url": "https:\/\/giphy.com\/embed\/yoJC2GnSClbPOkV0eA",
			"username": "",
			"source": "",
			"rating": "pg",
			"content_url": "",
			"source_tld": "",
			"source_post_url": "",
			"is_indexable": 1,
			"import_datetime": "2015-01-13 16:14:46",
			"trending_datetime": "2017-08-16 14:03:19",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "239",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "167",
					"size": "798778",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "111032",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "499218"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "120",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "239",
					"height": "200",
					"size": "148541",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "87526"
				},
				"preview": {
					"width": "150",
					"height": "124",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41279"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "120",
					"height": "100",
					"size": "301094",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "47829",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "208676"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224",
					"size": "1261251"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224",
					"size": "1261251"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "84"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "128",
					"height": "107",
					"size": "49852"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "167"
				},
				"480w_still": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "401",
					"size": "27914"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "84",
					"size": "223454",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "42245",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "158742"
				},
				"downsized_small": {
					"width": "193",
					"height": "162",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "129355"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "167",
					"size": "106101",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "64430"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224",
					"size": "1261251"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "268",
					"height": "224",
					"size": "1261251",
					"frames": "47",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "550841",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "881228"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "239",
					"height": "200",
					"size": "1121420",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "138820",
					"webp": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "676510"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2321491"
				},
				"original_mp4": {
					"width": "480",
					"height": "400",
					"mp4": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "550841"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/yoJC2GnSClbPOkV0eA\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "105",
					"height": "88",
					"size": "49714"
				}
			}
		}, {
			"type": "gif",
			"id": "11sBLVxNs7v6WA",
			"slug": "cheer-cheering-11sBLVxNs7v6WA",
			"url": "https:\/\/giphy.com\/gifs\/cheer-cheering-11sBLVxNs7v6WA",
			"bitly_gif_url": "http:\/\/gph.is\/1yqexne",
			"bitly_url": "http:\/\/gph.is\/1yqexne",
			"embed_url": "https:\/\/giphy.com\/embed\/11sBLVxNs7v6WA",
			"username": "",
			"source": "http:\/\/www.reactiongifs.com\/cheering-minions\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reactiongifs.com",
			"source_post_url": "http:\/\/www.reactiongifs.com\/cheering-minions\/",
			"is_indexable": 1,
			"import_datetime": "2015-01-29 16:30:00",
			"trending_datetime": "2017-08-04 06:45:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "442",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "90",
					"size": "53871",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "30514",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "55566"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "221",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "442",
					"height": "200",
					"size": "311151",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "110962"
				},
				"preview": {
					"width": "500",
					"height": "226",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41356"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "221",
					"height": "100",
					"size": "193761",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "31756",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "66406"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226",
					"size": "52113"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226",
					"size": "482454"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226",
					"size": "482454"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "45"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "356",
					"height": "161",
					"size": "48222"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "90"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "45",
					"size": "53871",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "19181",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "21202"
				},
				"downsized_small": {
					"width": "500",
					"height": "226",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "41356"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "90",
					"size": "96720",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "33272"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226",
					"size": "482454"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "226",
					"size": "482454",
					"frames": "10",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "123528",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "217320"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "442",
					"height": "200",
					"size": "193761",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39777",
					"webp": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "185624"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "3741362"
				},
				"original_mp4": {
					"width": "480",
					"height": "216",
					"mp4": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "123528"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/11sBLVxNs7v6WA\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "232",
					"height": "105",
					"size": "48421"
				}
			}
		}, {
			"type": "gif",
			"id": "5xtDarqlsEW6F7F14Fq",
			"slug": "editingandlayout-smile-beach-drink-5xtDarqlsEW6F7F14Fq",
			"url": "https:\/\/giphy.com\/gifs\/editingandlayout-smile-beach-drink-5xtDarqlsEW6F7F14Fq",
			"bitly_gif_url": "http:\/\/gph.is\/Zeq0fl",
			"bitly_url": "http:\/\/gph.is\/Zeq0fl",
			"embed_url": "https:\/\/giphy.com\/embed\/5xtDarqlsEW6F7F14Fq",
			"username": "",
			"source": "http:\/\/pandawhale.com\/post\/51078\/trading-places-eddie-murphy-champagne-cheers-gif",
			"rating": "g",
			"content_url": "",
			"source_tld": "pandawhale.com",
			"source_post_url": "http:\/\/pandawhale.com\/post\/51078\/trading-places-eddie-murphy-champagne-cheers-gif",
			"is_indexable": 0,
			"import_datetime": "2014-09-25 12:07:29",
			"trending_datetime": "2017-07-03 15:00:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "444",
					"height": "250"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "1650336",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "125870",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "1176798"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200",
					"size": "336133",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "151110"
				},
				"preview": {
					"width": "206",
					"height": "114",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "49394"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "178",
					"height": "100",
					"size": "1401527",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "100682",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "937768"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "140",
					"size": "32119"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "140",
					"size": "1407203"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-downsized-large.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "444",
					"height": "250",
					"size": "7678715"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "144",
					"height": "81",
					"size": "49870"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113"
				},
				"480w_still": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "270",
					"size": "28030"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "56",
					"size": "429921",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34462",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "340474"
				},
				"downsized_small": {
					"width": "227",
					"height": "128",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "189081"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "113",
					"size": "109280",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "56564"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-downsized-medium.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200",
					"size": "3156726"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "444",
					"height": "250",
					"size": "9205429",
					"frames": "127",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "552267",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "5121970"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "355",
					"height": "200",
					"size": "5784726",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "326135",
					"webp": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "3176718"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1689887"
				},
				"original_mp4": {
					"width": "480",
					"height": "270",
					"mp4": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "552267"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/5xtDarqlsEW6F7F14Fq\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "121",
					"height": "68",
					"size": "46325"
				}
			}
		}, {
			"type": "gif",
			"id": "rdma0nDFZMR32",
			"slug": "happy-car-home-rdma0nDFZMR32",
			"url": "https:\/\/giphy.com\/gifs\/happy-car-home-rdma0nDFZMR32",
			"bitly_gif_url": "http:\/\/gph.is\/16j9Ljr",
			"bitly_url": "http:\/\/gph.is\/16j9Ljr",
			"embed_url": "https:\/\/giphy.com\/embed\/rdma0nDFZMR32",
			"username": "",
			"source": "http:\/\/www.gifbay.com\/gif\/when_im_coming_home-8884\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.gifbay.com",
			"source_post_url": "http:\/\/www.gifbay.com\/gif\/when_im_coming_home-8884\/",
			"is_indexable": 1,
			"import_datetime": "2013-09-22 13:29:33",
			"trending_datetime": "0001-12-30 00:00:00",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "278",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360"
				},
				"fixed_width": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "144",
					"size": "55367",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "9826",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "53798"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "139",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "278",
					"height": "200",
					"size": "240018",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "72080"
				},
				"preview": {
					"width": "450",
					"height": "324",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "27969"
				},
				"fixed_height_small": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "139",
					"height": "100",
					"size": "95405",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "13679",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "31304"
				},
				"downsized_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360",
					"size": "59529"
				},
				"downsized": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360",
					"size": "430062"
				},
				"downsized_large": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360",
					"size": "430062"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "72"
				},
				"preview_webp": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "318",
					"height": "229",
					"size": "49740"
				},
				"fixed_width_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "144"
				},
				"480w_still": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "346",
					"size": "17846"
				},
				"fixed_width_small": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "72",
					"size": "55367",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "11242",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "19280"
				},
				"downsized_small": {
					"width": "500",
					"height": "360",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "54814"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "144",
					"size": "137159",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "40064"
				},
				"downsized_medium": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360",
					"size": "430062"
				},
				"original": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "360",
					"size": "430062",
					"frames": "8",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34762",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "307578"
				},
				"fixed_height": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "278",
					"height": "200",
					"size": "95405",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "8910",
					"webp": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "96234"
				},
				"looping": {
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "3769157"
				},
				"original_mp4": {
					"width": "480",
					"height": "344",
					"mp4": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34762"
				},
				"preview_gif": {
					"url": "https:\/\/media0.giphy.com\/media\/rdma0nDFZMR32\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "269",
					"height": "194",
					"size": "47598"
				}
			}
		}, {
			"type": "gif",
			"id": "nXxOjZrbnbRxS",
			"slug": "win-nXxOjZrbnbRxS",
			"url": "https:\/\/giphy.com\/gifs\/win-nXxOjZrbnbRxS",
			"bitly_gif_url": "http:\/\/gph.is\/1aR7NWq",
			"bitly_url": "http:\/\/gph.is\/1aR7NWq",
			"embed_url": "https:\/\/giphy.com\/embed\/nXxOjZrbnbRxS",
			"username": "",
			"source": "http:\/\/fuckyeahreactionface.tumblr.com\/post\/1502545449",
			"rating": "g",
			"content_url": "",
			"source_tld": "fuckyeahreactionface.tumblr.com",
			"source_post_url": "http:\/\/fuckyeahreactionface.tumblr.com\/post\/1502545449",
			"is_indexable": 0,
			"import_datetime": "2013-06-27 14:33:31",
			"trending_datetime": "2017-08-13 23:15:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "148",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "474474",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "36661",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "464134"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "74",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "148",
					"height": "200",
					"size": "53524",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "46600"
				},
				"preview": {
					"width": "118",
					"height": "162",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "20529"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "74",
					"height": "100",
					"size": "64830",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "10008",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "76206"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "484428"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "484428"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "135"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "119",
					"height": "161",
					"size": "46806"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "135",
					"size": "113232",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "13895",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "119704"
				},
				"downsized_small": {
					"width": "200",
					"height": "270",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "136319"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "100411",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "90870"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "484428"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "270",
					"size": "484428",
					"frames": "31",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "305132",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "464134"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "148",
					"height": "200",
					"size": "253226",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "24242",
					"webp": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "239540"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1646679"
				},
				"original_mp4": {
					"width": "480",
					"height": "648",
					"mp4": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "305132"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/nXxOjZrbnbRxS\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "107",
					"height": "144",
					"size": "48262"
				}
			}
		}, {
			"type": "gif",
			"id": "JltOMwYmi0VrO",
			"slug": "JltOMwYmi0VrO",
			"url": "https:\/\/giphy.com\/gifs\/JltOMwYmi0VrO",
			"bitly_gif_url": "http:\/\/gph.is\/1RQn3ED",
			"bitly_url": "http:\/\/gph.is\/1RQn3ED",
			"embed_url": "https:\/\/giphy.com\/embed\/JltOMwYmi0VrO",
			"username": "",
			"source": "https:\/\/www.reddit.com\/r\/reactiongifs\/comments\/4m72eo\/mrw_i_learn_that_i_can_block_a_certain_political\/",
			"rating": "g",
			"content_url": "",
			"source_tld": "www.reddit.com",
			"source_post_url": "https:\/\/www.reddit.com\/r\/reactiongifs\/comments\/4m72eo\/mrw_i_learn_that_i_can_block_a_certain_political\/",
			"is_indexable": 1,
			"import_datetime": "2016-06-02 13:10:08",
			"trending_datetime": "2017-08-15 03:00:02",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "238",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235"
				},
				"fixed_width": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "168",
					"size": "272110",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "26468",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "92086"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "119",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "238",
					"height": "200",
					"size": "145481",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "44912"
				},
				"preview": {
					"width": "252",
					"height": "210",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "40149"
				},
				"fixed_height_small": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "119",
					"height": "100",
					"size": "105082",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "13040",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "43826"
				},
				"downsized_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235",
					"size": "27654"
				},
				"downsized": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235",
					"size": "592907"
				},
				"downsized_large": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235",
					"size": "592907"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "84"
				},
				"preview_webp": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "191",
					"height": "160",
					"size": "49320"
				},
				"fixed_width_still": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "168"
				},
				"fixed_width_small": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "84",
					"size": "76547",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "10969",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "34674"
				},
				"downsized_small": {
					"width": "280",
					"height": "234",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "56099"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "168",
					"size": "103451",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "33942"
				},
				"downsized_medium": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235",
					"size": "592907"
				},
				"original": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "280",
					"height": "235",
					"size": "592907",
					"frames": "16",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "111409",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "171374"
				},
				"fixed_height": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "238",
					"height": "200",
					"size": "384567",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "32823",
					"webp": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "121448"
				},
				"looping": {
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1092636"
				},
				"original_mp4": {
					"width": "480",
					"height": "402",
					"mp4": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "111409"
				},
				"preview_gif": {
					"url": "https:\/\/media2.giphy.com\/media\/JltOMwYmi0VrO\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "110",
					"height": "92",
					"size": "48181"
				}
			}
		}, {
			"type": "gif",
			"id": "aQYR1p8saOQla",
			"slug": "see-heavy-aQYR1p8saOQla",
			"url": "https:\/\/giphy.com\/gifs\/see-heavy-aQYR1p8saOQla",
			"bitly_gif_url": "http:\/\/gph.is\/1kpQiD1",
			"bitly_url": "http:\/\/gph.is\/1kpQiD1",
			"embed_url": "https:\/\/giphy.com\/embed\/aQYR1p8saOQla",
			"username": "",
			"source": "http:\/\/www.heavy.com\/social\/2014\/03\/frozen-disney-memes-gifs-funny-pictures\/",
			"rating": "y",
			"content_url": "",
			"source_tld": "www.heavy.com",
			"source_post_url": "http:\/\/www.heavy.com\/social\/2014\/03\/frozen-disney-memes-gifs-funny-pictures\/",
			"is_indexable": 0,
			"import_datetime": "2014-03-03 05:58:00",
			"trending_datetime": "2015-11-03 23:44:39",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "181",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "221",
					"size": "1001881",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "50734",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "530112"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "91",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "181",
					"height": "200",
					"size": "145554",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "58286"
				},
				"preview": {
					"width": "176",
					"height": "194",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "27749"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "91",
					"height": "100",
					"size": "227828",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "16876",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "155506"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245",
					"size": "39577"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245",
					"size": "1216146"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245",
					"size": "1216146"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "110"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "123",
					"height": "136",
					"size": "49394"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "221"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "110",
					"size": "272833",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "19004",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "178884"
				},
				"downsized_small": {
					"width": "222",
					"height": "244",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "80668"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "221",
					"size": "175567",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "67104"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245",
					"size": "1216146"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "222",
					"height": "245",
					"size": "1216146",
					"frames": "51",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "230492",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "674774"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "181",
					"height": "200",
					"size": "832849",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "45662",
					"webp": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "457080"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "1732223"
				},
				"original_mp4": {
					"width": "480",
					"height": "528",
					"mp4": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "230492"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/aQYR1p8saOQla\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "99",
					"height": "109",
					"size": "49474"
				}
			}
		}, {
			"type": "gif",
			"id": "3oEduOnl5IHM5NRodO",
			"slug": "att-3oEduOnl5IHM5NRodO",
			"url": "https:\/\/giphy.com\/gifs\/att-3oEduOnl5IHM5NRodO",
			"bitly_gif_url": "http:\/\/gph.is\/1MOQ9Vo",
			"bitly_url": "http:\/\/gph.is\/1MOQ9Vo",
			"embed_url": "https:\/\/giphy.com\/embed\/3oEduOnl5IHM5NRodO",
			"username": "att",
			"source": "att.com",
			"rating": "pg",
			"content_url": "",
			"source_tld": "",
			"source_post_url": "att.com",
			"is_indexable": 1,
			"import_datetime": "2015-10-02 20:32:36",
			"trending_datetime": "2017-08-03 09:00:01",
			"user": {
				"avatar_url": "https:\/\/media.giphy.com\/avatars\/att\/dBYFQT5oeWOp.png",
				"banner_url": "",
				"profile_url": "https:\/\/giphy.com\/att\/",
				"username": "att",
				"display_name": "AT&T",
				"twitter": "@ATT"
			},
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "400",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "600",
					"height": "300"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "100",
					"size": "454661",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "43780",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "168260"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "400",
					"height": "200",
					"size": "285073",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "81662"
				},
				"preview": {
					"width": "280",
					"height": "140",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "48177"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "100",
					"size": "471767",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "39263",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "170172"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "125",
					"size": "21946"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "250",
					"height": "125",
					"size": "678161"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "600",
					"height": "300",
					"size": "3653602"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "50"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "210",
					"height": "105",
					"size": "49178"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "100"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "50",
					"size": "141488",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "16046",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "65306"
				},
				"downsized_small": {
					"width": "540",
					"height": "270",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "175026"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "100",
					"size": "83308",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "30368"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "600",
					"height": "300",
					"size": "3653602"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "600",
					"height": "300",
					"size": "3653602",
					"frames": "34",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "155682",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "981768"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "400",
					"height": "200",
					"size": "1575451",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "108613",
					"webp": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "461790"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "2260206"
				},
				"original_mp4": {
					"width": "480",
					"height": "240",
					"mp4": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "155682"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/3oEduOnl5IHM5NRodO\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "116",
					"height": "58",
					"size": "49586"
				}
			}
		}, {
			"type": "gif",
			"id": "10UeedrT5MIfPG",
			"slug": "dancing-happy-cartoons-10UeedrT5MIfPG",
			"url": "https:\/\/giphy.com\/gifs\/dancing-happy-cartoons-10UeedrT5MIfPG",
			"bitly_gif_url": "http:\/\/gph.is\/1c23xHx",
			"bitly_url": "http:\/\/gph.is\/1c23xHx",
			"embed_url": "https:\/\/giphy.com\/embed\/10UeedrT5MIfPG",
			"username": "",
			"source": "http:\/\/moviesludge.tumblr.com\/post\/77576572408",
			"rating": "g",
			"content_url": "",
			"source_tld": "moviesludge.tumblr.com",
			"source_post_url": "http:\/\/moviesludge.tumblr.com\/post\/77576572408",
			"is_indexable": 1,
			"import_datetime": "2014-02-24 20:54:29",
			"trending_datetime": "2017-07-16 03:45:01",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "274",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365"
				},
				"fixed_width": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "146",
					"size": "174212",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "15321",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "85150"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "137",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "274",
					"height": "200",
					"size": "120643",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "45652"
				},
				"preview": {
					"width": "406",
					"height": "294",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "48175"
				},
				"fixed_height_small": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "137",
					"height": "100",
					"size": "92834",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "8559",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "46660"
				},
				"downsized_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365",
					"size": "76008"
				},
				"downsized": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365",
					"size": "1021665"
				},
				"downsized_large": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365",
					"size": "1021665"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "73"
				},
				"preview_webp": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "221",
					"height": "161",
					"size": "49088"
				},
				"fixed_width_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "146"
				},
				"480w_still": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "479",
					"height": "350",
					"size": "14322"
				},
				"fixed_width_small": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "73",
					"size": "52406",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "5752",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "29316"
				},
				"downsized_small": {
					"width": "500",
					"height": "364",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "75826"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "146",
					"size": "68405",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "28742"
				},
				"downsized_medium": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365",
					"size": "1021665"
				},
				"original": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "365",
					"size": "1021665",
					"frames": "18",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "55566",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "462976"
				},
				"fixed_height": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "274",
					"height": "200",
					"size": "308471",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "23601",
					"webp": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "136526"
				},
				"looping": {
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "828753"
				},
				"original_mp4": {
					"width": "480",
					"height": "350",
					"mp4": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "55566"
				},
				"preview_gif": {
					"url": "https:\/\/media0.giphy.com\/media\/10UeedrT5MIfPG\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "141",
					"height": "103",
					"size": "49645"
				}
			}
		}, {
			"type": "gif",
			"id": "DYH297XiCS2Ck",
			"slug": "holy-shit-best-day-ever-marriage-equality-and-alabama-shakes-DYH297XiCS2Ck",
			"url": "https:\/\/giphy.com\/gifs\/holy-shit-best-day-ever-marriage-equality-and-alabama-shakes-DYH297XiCS2Ck",
			"bitly_gif_url": "http:\/\/gph.is\/1PHWYat",
			"bitly_url": "http:\/\/gph.is\/1PHWYat",
			"embed_url": "https:\/\/giphy.com\/embed\/DYH297XiCS2Ck",
			"username": "",
			"source": "http:\/\/exilemoon.tumblr.com\/post\/122521282582\/alabama-shakes-september-17th",
			"rating": "g",
			"content_url": "",
			"source_tld": "exilemoon.tumblr.com",
			"source_post_url": "http:\/\/exilemoon.tumblr.com\/post\/122521282582\/alabama-shakes-september-17th",
			"is_indexable": 1,
			"import_datetime": "2016-01-22 01:55:49",
			"trending_datetime": "0001-12-30 00:00:00",
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "258",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387"
				},
				"fixed_width": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "155",
					"size": "287822",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "23880",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "67640"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "129",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "258",
					"height": "200",
					"size": "137516",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "28536"
				},
				"preview": {
					"width": "312",
					"height": "240",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34620"
				},
				"fixed_height_small": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "129",
					"height": "100",
					"size": "139953",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "15170",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "40578"
				},
				"downsized_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387",
					"size": "80715"
				},
				"downsized": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387",
					"size": "1658356"
				},
				"downsized_large": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387",
					"size": "1658356"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "77"
				},
				"preview_webp": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "288",
					"height": "223",
					"size": "46376"
				},
				"fixed_width_still": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "155"
				},
				"fixed_width_small": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "77",
					"size": "89164",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "10708",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "28040"
				},
				"downsized_small": {
					"width": "500",
					"height": "386",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "156467"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "155",
					"size": "88094",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "19580"
				},
				"downsized_medium": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387",
					"size": "1658356"
				},
				"original": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "387",
					"size": "1658356",
					"frames": "21",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "106101",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "313134"
				},
				"fixed_height": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "258",
					"height": "200",
					"size": "455227",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "34842",
					"webp": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "100506"
				},
				"looping": {
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "850781"
				},
				"original_mp4": {
					"width": "480",
					"height": "370",
					"mp4": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "106101"
				},
				"preview_gif": {
					"url": "https:\/\/media3.giphy.com\/media\/DYH297XiCS2Ck\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "123",
					"height": "95",
					"size": "49701"
				}
			}
		}, {
			"type": "gif",
			"id": "MVDPX3gaKFPuo",
			"slug": "pitchperfect-movie-pitch-perfect-pitchperfect2-MVDPX3gaKFPuo",
			"url": "https:\/\/giphy.com\/gifs\/pitchperfect-movie-pitch-perfect-pitchperfect2-MVDPX3gaKFPuo",
			"bitly_gif_url": "http:\/\/gph.is\/1KPZlqU",
			"bitly_url": "http:\/\/gph.is\/1KPZlqU",
			"embed_url": "https:\/\/giphy.com\/embed\/MVDPX3gaKFPuo",
			"username": "pitchperfect",
			"source": "http:\/\/www.pitchperfectmovie.com\/post\/112898479358\/tgif",
			"rating": "pg",
			"content_url": "",
			"source_tld": "www.pitchperfectmovie.com",
			"source_post_url": "http:\/\/www.pitchperfectmovie.com\/post\/112898479358\/tgif",
			"is_indexable": 0,
			"import_datetime": "2015-03-06 19:24:25",
			"trending_datetime": "2017-08-14 04:45:02",
			"user": {
				"avatar_url": "https:\/\/media.giphy.com\/avatars\/pitchperfect\/wwsCw6YkFK0H.jpeg",
				"banner_url": "https:\/\/media.giphy.com\/headers\/pitchperfect\/T429kOje6VRW.jpg",
				"profile_url": "https:\/\/giphy.com\/pitchperfect\/",
				"username": "pitchperfect",
				"display_name": "Pitch Perfect",
				"twitter": "@PitchPerfect"
			},
			"images": {
				"fixed_height_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"original_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500"
				},
				"fixed_width": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "362420",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "17858",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "79392"
				},
				"fixed_height_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"fixed_height_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "188498",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "41428"
				},
				"preview": {
					"width": "394",
					"height": "394",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-preview.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "49252"
				},
				"fixed_height_small": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "115762",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "8143",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "30604"
				},
				"downsized_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-downsized_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500",
					"size": "148481"
				},
				"downsized": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-downsized.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500",
					"size": "1526726"
				},
				"downsized_large": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500",
					"size": "1526726"
				},
				"fixed_width_small_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100"
				},
				"preview_webp": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-preview.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "253",
					"height": "253",
					"size": "48786"
				},
				"fixed_width_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w_s.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200"
				},
				"480w_still": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/480w_s.jpg?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "480",
					"height": "480",
					"size": "18240"
				},
				"fixed_width_small": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100w.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "100",
					"height": "100",
					"size": "115762",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100w.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "8143",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/100w.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "30604"
				},
				"downsized_small": {
					"width": "500",
					"height": "500",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-downsized-small.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "80076"
				},
				"fixed_width_downsampled": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w_d.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "188498",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200w_d.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "41428"
				},
				"downsized_medium": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500",
					"size": "1526726"
				},
				"original": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "500",
					"height": "500",
					"size": "1526726",
					"frames": "11",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "54672",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "312264"
				},
				"fixed_height": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "200",
					"height": "200",
					"size": "362420",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "17858",
					"webp": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/200.webp?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"webp_size": "79392"
				},
				"looping": {
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-loop.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "3524523"
				},
				"original_mp4": {
					"width": "480",
					"height": "480",
					"mp4": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy.mp4?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"mp4_size": "54672"
				},
				"preview_gif": {
					"url": "https:\/\/media1.giphy.com\/media\/MVDPX3gaKFPuo\/giphy-preview.gif?fingerprint=e1bb72ff599b55f5573462716bec0669",
					"width": "124",
					"height": "124",
					"size": "48392"
				}
			}
		}],
		"pagination": {"total_count": 112467, "count": 25, "offset": 0},
		"meta": {"status": 200, "msg": "OK", "response_id": "599b55f5573462716bec0669"}
	};

	res.send(JSON.stringify(responseObject, 4, null));
});

module.exports = app;