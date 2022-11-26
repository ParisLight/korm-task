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

					<div class=" link btn hero__btn">
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
			<div class="container">
				<div class="veterinar-back" >
					<div class="veterinar-inner" >
						<div class="veterinar-info">
							<h3 class="individual-diet">Разработаем индивидуальный рацион под особенности вашего питомца</h3>
							<span class="adaptation">И будем помогать с адаптацией к нему в течение месяца</span>
							<div class="btn veterinar__btn">
								<span class="veterinar-btn-text">Рассказать о собаке</span>
							</div>
						</div>
						<div class="veterinar-img" >
							<img src="../assets/alexandra.png" alt="veterinar">
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script setup>
import Slider from "@/components/Slider.vue";
import { useImgStore } from "@/stores/imgStore.js";
import { ref , onMounted} from 'vue';

const useimgstore = useImgStore();

const o = ref(null)
let currentWidth = 150;


</script>

<style lang="scss">
.hero{
	background: #78BECE;
	padding-top: 170px;
	overflow: hidden;
	&-wrapper{
		position: relative;	
		padding-bottom: 400px;
	}
	
	&-content{
		z-index: 5;
	}

	&-dog-wrapper{
		position: absolute;
		// width: 1115px;
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
    width: 100%;
    height: 100%;
    -webkit-box-flex: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
	min-width: 1180px;	
}
.veterinar-bg-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
	// max-width: 1180px;
    -webkit-box-flex: 0;
    display: flex;
    justify-content: center;
}
.veterinar-bg {
    position: absolute;
    background: #A597C4;
    height: 100%;
    width: 100%;
	min-width: 1180px;
	max-width: 1830px;
    border-radius: 30px 400px 400px 30px;
}
.veterinar{
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
	
	&-back{
		// background: #A597C4;
		// width: 100%;
		// border-radius: 30px 400px 400px 30px;
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
			// bottom: 700px;
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

	.container {
      width: calc(100% - 40px);
    }
}
@media screen and (max-width: 920px){
	.hero-wrapper{
		max-height: 1500px;
	}
}

@media screen and (max-width: 900px){
	.hero{
		max-height: 1450px;
	}

	.choose-breed{
		top: -200px;
	}
}

@media screen and (max-width: 810px){
	.hero{
		max-height: 1350px;
	}
}

@media screen and (max-width: 750px){
	.hero{
		max-height: 1200px
	}

	.choose-breed{
		top: -150px;
	}
}

@media screen and (max-width: 640px){
	.hero{
		max-height: 1100px
	}

	.choose-breed{
		top: -150px;
	}
}

@media screen and (max-width: 570px){
	.hero{
		max-height: 1000px
	}

	.choose-breed{
		top: -120px;
	}
}
</style>

