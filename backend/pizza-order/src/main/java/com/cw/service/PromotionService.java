package com.cw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.PromotionDTO;
import com.cw.entity.Promotion;
import com.cw.repository.PromotionRepository;

@Service
public class PromotionService {

	@Autowired
	private PromotionRepository _repo;

	PromotionDTO addPromotion(PromotionDTO promotionDTO) {
		try {
			PromotionDTO response = new PromotionDTO();
			Promotion data = new Promotion();
			BeanUtils.copyProperties(promotionDTO, data);
			BeanUtils.copyProperties(_repo.save(data), response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}

	List<PromotionDTO> viewPromotion() {
		try {
			List<PromotionDTO> response = new ArrayList<>();
			BeanUtils.copyProperties(_repo.findAll(), response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}

	PromotionDTO updatePromotion(PromotionDTO promotionDTO) {
		try {
			PromotionDTO response = new PromotionDTO();
			Promotion data = new Promotion();
			BeanUtils.copyProperties(promotionDTO, data);
			BeanUtils.copyProperties(_repo.save(data), response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}

	PromotionDTO deletePromotion(int id) {
		try {
			PromotionDTO response = new PromotionDTO();
			Promotion data = new Promotion();
			data = _repo.findById(id).get();
			_repo.deleteById(id);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}
}
