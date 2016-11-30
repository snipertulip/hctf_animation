var GLOBALOPTION = GLOBALOPTION || {
	WarcraftOption: {
		LogoPath: "media/logo/",
		LogoSize: {
			width: 160,
			height: 90
		},
		logoOffset: new THREE.Vector3(0, 260, 0)
	}
};
var WarcraftData = {
	"rows": [{
		"logo": "media/logo/logo-01.jpg",
		"teamId": 12,
		"name": "gfsgfd"
	}, {
		"logo": "media/logo/logo-02.jpg",
		"teamId": 8,
		"name": "111111111111111111111"
	}, {
		"logo": "media/logo/logo-03.jpg",
		"teamId": 6,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "media/logo/logo-04.jpg",
		"teamId": 2,
		"name": "..."
	}, {
		"logo": "media/logo/logo-05.jpg",
		"teamId": 1,
		"name": "1024dui"
	}, {
		"logo": "media/logo/logo-02.jpg",
		"teamId": 3,
		"name": "111111111111111111111"
	}, {
		"logo": "media/logo/logo-03.jpg",
		"teamId": 4,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "media/logo/logo-04.jpg",
		"teamId": 5,
		"name": "..."
	}, {
		"logo": "media/logo/logo-05.jpg",
		"teamId": 1,
		"name": "1024dui"
	}],
	"total": 5,
	"type": 3
}
var ExaminationData = {
	"rows": [{
		"logo": "/media/logo/defaultLogo.png",
		"id": 1,
		"name": "gfsgfd"
	}, {
		"logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg",
		"id": 2,
		"name": "111111111111111111111"
	}, {
		"logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg",
		"id": 3,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "/media/logo/defaultLogo.png",
		"id": 4,
		"name": "gfsgfd"
	}, {
		"logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg",
		"id": 5,
		"name": "111111111111111111111"
	}, {
		"logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg",
		"id": 6,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 7,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 8,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 9,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 10,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 11,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 12,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 13,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 14,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 15,
		"name": "1024dui"
	},{
		"logo": "/media/logo/defaultLogo.png",
		"id": 16,
		"name": "gfsgfd"
	}, {
		"logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg",
		"id": 17,
		"name": "111111111111111111111"
	}, {
		"logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg",
		"id": 18,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "/media/logo/defaultLogo.png",
		"id": 19,
		"name": "gfsgfd"
	}, {
		"logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg",
		"id": 20,
		"name": "111111111111111111111"
	}, {
		"logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg",
		"id": 12,
		"name": "pan\u6218\u961f"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 22,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 23,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id":24,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 25,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 26,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 27,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 28,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 29,
		"name": "1024dui"
	}, {
		"logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg",
		"id": 30,
		"name": "1024dui"
	}],
	"total": 15,
	"type": 2
}
var AttackData = {
	"rows": [{
		"teamId": 12, //	攻击者
		"solved": false,
		"id": 1,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 8, //	攻击者
		"solved": false,
		"id": 2,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 1, //	攻击者
		"solved": false,
		"id": 3,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 6, //	攻击者
		"solved": false,
		"id": 4,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 2, //	攻击者
		"solved": false,
		"id": 5,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}],
	"total": 5,
	"type": 1
}
var AttackData1 = {
	"rows": [{
		"teamId": 12, //	攻击者
		"solved": false,
		"id": 10,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 8, //	攻击者
		"solved": false,
		"id": 9,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 1, //	攻击者
		"solved": false,
		"id": 8,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 6, //	攻击者
		"solved": false,
		"id": 7,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 2, //	攻击者
		"solved": false,
		"id": 6,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}],
	"total": 3,
	"type": 1
}
var AttackData2 = {
	"rows": [{
		"teamId": 1, //	攻击者
		"solved": false,
		"id": 15,
		"name": "xxx",
		"score": "1000",
		"ranking": "1",
	}, {
		"teamId": 2, //	攻击者
		"solved": false,
		"id": 14,
		"name": "xxx",
		"score": "1000",
		"ranking": "2",
	}, {
		"teamId": 3, //	攻击者
		"solved": false,
		"id": 12,
		"name": "xxx",
		"score": "1000",
		"ranking": "3",
	}, {
		"teamId": 4, //	攻击者
		"solved": false,
		"id": 13,
		"name": "xxx",
		"score": "1000",
		"ranking": "4",
	}, {
		"teamId": 5, //	攻击者
		"solved": false,
		"id": 11,
		"name": "xxx",
		"score": "1000",
		"ranking": "5",
	}],
	"total": 3,
	"type": 1
}
var AttackDataCache = null;
/*
//题目
{
	"rows": [
		{ "logo": "/media/logo/defaultLogo.png", "id": 12, "name": "gfsgfd" },
		{ "logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg", "id": 8, "name": "111111111111111111111" },
		{ "logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg", "id": 6, "name": "pan\u6218\u961f" },
		{ "logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg", "id": 2, "name": "..." },
		{ "logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg", "id": 1, "name": "1024dui" }
	],
	"total": 5,
	"type": 3
}

//团队	(保持不变)
{
	"rows": [
		{ "logo": "/media/logo/defaultLogo.png", "teamId": 38, "name": "gfsgfd" },
		{ "logo": "/media/logo/74944e39-a1b3-4727-8ce0-87a9f5fd608c.jpg", "teamId": 74, "name": "111111111111111111111" },
		{ "logo": "/media/logo/ca8fefb3-e9a7-4b40-a990-4349e0d3e184.jpg", "teamId": 68, "name": "pan\u6218\u961f" },
		{ "logo": "/media/logo/75fef99f-e949-4c81-8ad5-b36f131d75f2.jpg", "teamId": 73, "name": "1024dui" }
	],
	"total": 4,
	"type": 2
}

//攻击信息	(需求修改)
// {
// 	"rows": [
// 		{ "solved": false, "id": 6 },
// 		{ "solved": false, "id": 7 }
// 	],
// 	"total": 2,
// 	"type": 1
// }

//攻击信息
{
	"rows": [
		{
			"teamId": 74,	//攻击者
			"rows": [
				{ "solved": false, "id": 38 },//	被攻击者
				{ "solved": false, "id": 7 }
			],
			"total": 2,
		}
	]
	"total": 2,
	"type": 1
}
*/