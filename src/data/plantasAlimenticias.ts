import type { Planta } from "../types/planta"

import {
	alface,
	alho,
	batata,
	cenoura,
	couve,
	tomate,
	oraProNobis,
	peixinhoDaHorta,
	taioba,
	beldroega,
	serralha,
	capuchinha,
} from "../assets/catalogo-alimenticia/index"

export const plantasConvencionais: Planta[] = [
	{
		txt: "Alface",
		imagem: alface,
		caminho: "",
		nomeCientifico: "Lactuca sativa",
		origem: "Mediterrâneo e Ásia Menor",
		ondeEncontra: "Supermercados, feiras livres e hortas domésticas.",
	},
	{
		txt: "Tomate",
		imagem: tomate,
		caminho: "",
		nomeCientifico: "Solanum lycopersicum",
		origem: "Região andina da América do Sul",
		ondeEncontra:
			"Cultivado no mundo todo; disponível em qualquer supermercado, feira ou quitanda.",
	},
	{
		txt: "Cenoura",
		imagem: cenoura,
		caminho: "",
		nomeCientifico: "Daucus carota",
		origem: "Ásia Central",
		ondeEncontra: "Supermercados e feiras livres.",
	},
	{
		txt: "Batata",
		imagem: batata,
		caminho: "",
		nomeCientifico: "Solanum tuberosum",
		origem: "Altiplano andino, Peru e Bolívia",
		ondeEncontra: "Supermercados, feiras e mercados em geral.",
	},
	{
		txt: "Couve",
		imagem: couve,
		caminho: "",
		nomeCientifico: "Brassica oleracea",
		origem: "Europa Ocidental",
		ondeEncontra: "Feiras livres, supermercados e hortas urbanas.",
	},
	{
		txt: "Alho",
		imagem: alho,
		caminho: "",
		nomeCientifico: "Allium sativum",
		origem: "Ásia Central",
		ondeEncontra: "Supermercados e feiras em todo o Brasil.",
	},
]

export const plantasNaoConvencionais: Planta[] = [
	{
		txt: "Ora-pro-nóbis",
		imagem: oraProNobis,
		caminho: "",
		nomeCientifico: "Pereskia aculeata",
		origem: "América tropical",
		ondeEncontra: "Quintais, feiras agroecológicas e mercados naturais.",
	},
	{
		txt: "Peixinho-da-horta",
		imagem: peixinhoDaHorta,
		caminho: "",
		nomeCientifico: "Stachys byzantina",
		origem: "Sudoeste da Ásia e Europa",
		ondeEncontra: "Hortas urbanas e feiras agroecológicas.",
	},
	{
		txt: "Taioba",
		imagem: taioba,
		caminho: "",
		nomeCientifico: "Xanthosoma sagittifolium",
		origem: "América Central e do Sul",
		ondeEncontra:
			"Quintais, feiras regionais e mercados do Norte e Sudeste do Brasil.",
	},
	{
		txt: "Beldroega",
		imagem: beldroega,
		caminho: "",
		nomeCientifico: "Portulaca oleracea",
		origem: "Norte da África e Europa",
		ondeEncontra:
			"Cresce espontaneamente em quintais e terrenos; feiras agroecológicas.",
	},
	{
		txt: "Serralha",
		imagem: serralha,
		caminho: "",
		nomeCientifico: "Sonchus oleraceus",
		origem: "Europa e Ásia",
		ondeEncontra:
			"Cresce espontaneamente em jardins e quintais por todo o Brasil.",
	},
	{
		txt: "Capuchinha",
		imagem: capuchinha,
		caminho: "",
		nomeCientifico: "Tropaeolum majus",
		origem: "América do Sul (Andes)",
		ondeEncontra: "Hortas ornamentais, feiras agroecológicas e jardins.",
	},
]
