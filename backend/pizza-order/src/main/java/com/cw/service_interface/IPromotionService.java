package com.cw.service_interface;

import java.util.List;

import com.cw.dto.PromotionDTO;

public interface IPromotionService {

	PromotionDTO addPromotion(PromotionDTO promotionDTO);
	List<PromotionDTO> viewPromotion();
	PromotionDTO updatePromotion(PromotionDTO promotionDTO);
	PromotionDTO deletePromotion(int id);
	
}
