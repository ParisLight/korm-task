import { defineStore } from "pinia";

export const useImgStore = defineStore('images', {
state: () => ({
		dogs: [
			{img: 'Chihua.png', name: 'Чихуахуа', weight: 'до 15 кг'},
			{img: 'JackRassel.png', name: 'Джек рассел терьер', weight: 'до 8 кг'},
			{img: 'Terier.png', name: 'Йоркширский терьер', weight: 'до 3 кг'},
			{img: 'shpic.png', name: 'Шпиц', weight: 'до 13 кг'},
			{img: 'dog 1.png', name: 'Корги', weight: 'до 17 кг'},
			{img: 'Chihua.png', name: 'Чихуахуа', weight: 'до 15 кг'},
			{img: 'JackRassel.png', name: 'Джек рассел терьер', weight: 'до 8 кг'},
			{img: 'Terier.png', name: 'Йоркширский терьер', weight: 'до 3 кг'},
			{img: 'shpic.png', name: 'Шпиц', weight: 'до 13 кг'},
			{img: 'dog 1.png', name: 'Корги', weight: 'до 17 кг'},
			{img: 'Chihua.png', name: 'Чихуахуа', weight: 'до 15 кг'},
			{img: 'JackRassel.png', name: 'Джек рассел терьер', weight: 'до 8 кг'},
			{img: 'Terier.png', name: 'Йоркширский терьер', weight: 'до 3 кг'},
			{img: 'shpic.png', name: 'Шпиц', weight: 'до 13 кг'},
			{img: 'dog 1.png', name: 'Корги', weight: 'до 17 кг'},
		]
	})
})