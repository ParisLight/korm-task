<template>
	<section class="hero">
		<div class="container">
			<div class="hero-wrapper">
				<div class="hero-dog-wrapper">
					<img src="../assets/dog-full.png" class="hero-dog" alt="dog">
					<div class="hero-dog-sale">
						<img src="../assets/sale.png" class="sale-img" alt="sale">
					</div>
				</div>
				<div class="hero-content">
					<h3 class="main-title hero__title">Подписка на натуральную еду для вашей собаки</h3>
					<div class="hero-info">
						<div class="hero-info-content">
							<img src="../assets/shield.svg" alt="shield">
							<span class="hero-info-text">Подберём витамины и микроэлементы</span>
						</div>
						<div class="hero-info-content">
							<img src="../assets/heart.svg" alt="heart">
							<span class="hero-info-text">Будем следить за здоровьем питомца</span>
						</div>
					</div>

					<div class="red-btn btn hero__btn">
						<span class="hero-btn-text">Подобрать рацион</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="choose-breed">
		<div class="dog-slider choose-breed__dog-slider">
			<div class="container">
				<div class="choose-breed-inner">
						<h3 class="choose-breed-title">
							Какой породы ваш любимчик?
						</h3>
						<span class="choose-breed-info">
							Так мы сможем точнее подобрать рацион и назвать цену
						</span>
					</div>
			</div>	
		</div>
		<div class="choose-bread__slider">
			<Slider :imgArray="useimgstore.dogs"/>
		</div>
	</section>
	
	<div ref="o" class="observer veterinar">
		<div class="veterinar-background">
					<div class="veterinar-bg-wrapper container">
						<div class="veterinar-bg"></div>
					</div>
				</div>
			<div class="container veterinar__container">
				<div class="veterinar-back" >
					<div class="veterinar-inner" >
						<div class="veterinar-info">
							<h3 class="individual-diet">Разработаем индивидуальный рацион под особенности вашего питомца</h3>
							<span class="adaptation">И будем помогать с адаптацией к нему в течение месяца</span>
						<div class="btn red-btn veterinar__btn">
							<span class="veterinar-btn-text">Рассказать о собаке</span>
						</div>
					</div>
					<div class="veterinar-img" >
						<img src="../assets/alexandra.png" class="alexandra-img" alt="veterinar">
						<img src="../assets/alexandra-mob.png" class="alexandra-mob" alt="veterinar">
					</div>
					<div class="veterinar-name">
						<div class="veterinar-name-content">
							<span>Александра<br>Буланова</span>
						</div>
						<div class="veterinar-desc">
							<span class="veterinar-desc-content">Ветеринар «Биоконтроль»</span>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="veterinar-name-mobile">
						<div class="veterinar-name-mobile-content">
							<span class="veterinar-name-text-mobile">Александра Буланова</span>
						</div>
						<div class="veterinar-desc-mobile">
							<span class="veterinar-desc-mobile-content">Ветеринар «Биоконтроль»</span>
						</div>
					</div>
	</div>
</template>

<script setup>
import Slider from "@/components/Slider.vue";
import { useImgStore } from "@/stores/imgStore.js";
import { ref , onMounted} from 'vue';

const useimgstore = useImgStore();

// const o = ref(null)

// onMounted(() => {
// 	let options = {
// 	rootMargin: '0px',
// 	threshold: 0.4,
// }

// const observer = new IntersectionObserver(callback, options);
// observer.observe(o.value);
// })
</script>

<style lang="scss">

.hero{
	background: #78BECE;
	padding-top: 170px;
	overflow: hidden;
	max-height: 1280px;
	&-wrapper{
		position: relative;	
		padding-bottom: 400px;
	}
	
	&-content{
		z-index: 5;
	}

	&-dog-wrapper{
		position: absolute;
		top: -500px;
		right: -320px;
		z-index: 1;
	}

	&-dog-sale{
		position: absolute;
		bottom: 220px;
		right: 320px;
	}

	&__title{
		margin-top: 42px;
		max-width: 603px;
	}

	&-info{
		margin-top: 40px;
		max-width: 610px;
		display: flex;
		justify-content: space-between;
		&-content{
			max-width: 289px;
			display: flex;
			align-items: flex-start;
		}

		&-text{
			margin-left: 16px;
		}
	}

	&-info-text{
		font-weight: 500;
		font-size: 20px;
		line-height: 140%;
	}

	&__btn{
		margin-top: 80px;
		margin-bottom: 262px;
		max-width: 304px;
	}

}

.red-btn{
	&:hover{
		background: #FF79A4;
		transition-duration: 0.5s;
	}
}

.choose-breed{
	position: relative;
	top: -300px;
	&-inner{
		display: flex;
		flex-direction: column;
	}	
	&-title{
		font-weight: 700;
		font-size: 40px;
		line-height: 120%;
	}	

	&-info{
		font-weight: 500;
		font-size: 24px;
		line-height: 140%;
		margin-top: 8px;
	}

	&__slider{
		margin-top: 50px;
	}
}

.btn{
	font-weight: 600;
	font-size: 24px;
	line-height: 111.9%;
	background: #F15487;
	border-radius: 16px;
	padding: 25px 30px;
	z-index: 20;
	cursor: pointer;
	
}

.main-title{
	font-weight: 700;
	font-size: 60px;
	line-height: 120%;
}

.veterinar-background {
    position: absolute;
    top: 0;
    max-width: 1140px;
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.veterinar-bg-wrapper {
    position: relative;
    height: 100%;
    max-width: 1140px;
	width: 100%;
    display: flex;
    justify-content: center;
}
.veterinar-bg {
    position: absolute;
    background: #A597C4;
    height: 100%;
    max-width: 1140px;
	width: 100%;
    border-radius: 30px 400px 400px 30px;
}
.veterinar{
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
	
	&-back{
		z-index: 20;
	}

	&-inner{
		display: flex;
		justify-content: space-between;
		padding: 60px;
		position: relative;
	}

	&-info{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 500px;
		z-index: 10;
	}

	&-btn-text{
		text-align: center;
	}

	&-img{
		position: absolute;
		right: 145px;
		top: -215px;
		z-index: 1
	}
	&-name{
		margin-right: 40px;
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		&-content{
			font-weight: 600;
			font-size: 24px;
			line-height: 120%;
		}
		&-mobile{
			display: none;
		}
		
	}
	&-desc{
		margin-top: 8px;
		opacity: 0.6;
		font-weight: 600;
		font-size: 13px;
		line-height: 130%;
	}

	&-name-mobile{

	}
}

.alexandra-mob{
	display: none;
}

.individual-diet{
	font-weight: 600;
	font-size: 32px;
	line-height: 120%;
	letter-spacing: 0.02em;
	margin-bottom: 24px;
}

.adaptation{
	font-weight: 500;
	font-size: 22px;
	line-height: 140%;
	margin-bottom: 131px;
	max-width: 382px;
}

@media screen and (max-width: 955px){ 
	.hero{
		overflow: hidden;
		max-height: 1550px;
		&-wrapper{
			display: flex;
			flex-direction: column;
			top: -50px
		}
		
		&-dog-wrapper{
			position: relative;
			margin-top: -44%;
			padding-bottom: 0;
			right: 0;
			top: 0;
		}

		&-dog-sale{
			right: 0;
		}

		&-dog{
			width: 112%;
		}

		.sale-img{
			width: 131px;
		}

		&-content{
			position: relative;
			bottom: 175px;
		}

		&-info{
			flex-direction: column;
			margin-top: 20px;
			&-text{
				margin-bottom: 20px;
				font-size: 16px;

			}
		}

		&__btn{
			max-width: 100%;
			text-align: center;
			font-size: 20px;
			margin-top: 32px;
			margin-bottom: 52px;
		}

		&__title{
			font-size: 32px;
		}
	}

	.choose-breed{
		top: -250px;
		overflow: hidden;
		&-title{
			font-weight: 700;
			font-size: 24px;
			line-height: 120%;
		}

		&-info{
			font-weight: 500;
			font-size: 16px;
			line-height: 140%;	
		}
	}

	.veterinar{
		display: flex;
		flex-shrink: 1;
		flex-grow: 1;
		top: -200px;
		&__container{
			border-radius: 30px 30px 400px 400px;
			overflow: hidden;
		}
		&-inner{
			flex-direction: column;
			padding: 0;
			border-radius: 30px 30px 400px 400px; 
			overflow: hidden;
		}

		&-info{
			padding: 30px;
			flex-grow: 1;
		}

		&-bg{
			border-radius: 30px 30px 400px 400px; 	
		}

		&__btn{
			display: none;
		}

		&-img{
			position: relative;
			right: 0;
			top: 0;
			margin-left: 0;
			margin-right: 0;
			margin-top: -16%;
		}

		&-name{
			display: none;
		}

		&-name-mobile{
			display: block;
			text-align: center;
			position: absolute;
			top: calc(100% + 12px);
			align-items: center;
			
			.veterinar-name-text-mobile{
				color: #000000;
				font-weight: 600;
				font-size: 16px;
				line-height: 120%;
			}
			.veterinar-desc-mobile-content{
				font-weight: 600;
				font-size: 12px;
				line-height: 130%;
				color: #000000;
				opacity: 0.6;
			}
		}
	}

	.individual-diet{
			font-size: 24px;
	}
	.adaptation{
		font-size: 16px;
		margin-bottom: 0;
	}

	.alexandra-img{
		display: none;
	}
	.alexandra-mob{
		display: block;
		width: 100%;
		height: 100%;
	}
}

@media screen and (max-width: 920px){
	.hero-wrapper{
		padding-bottom: 0px;
	}

	.hero-dog-sale{
		bottom: 23%;
		right: 0%;
		left: auto;
	}
}

@media screen and (max-width: 700px){
	.hero-dog-wrapper{
		top: -80px;
	}
}
</style>

