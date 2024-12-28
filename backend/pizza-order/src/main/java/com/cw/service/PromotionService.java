package com.cw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.PromotionDTO;
import com.cw.entity.Promotion;
import com.cw.repository.PromotionRepository;
import com.cw.service_interface.IPromotionService;

@Service
public class PromotionService implements IPromotionService{

	@Autowired
	private PromotionRepository _repo;

	@Override
	public PromotionDTO addPromotion(PromotionDTO promotionDTO) {
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
	@Override
	public List<PromotionDTO> viewPromotion() {
		try {
			List<PromotionDTO> response = new ArrayList<>();
			List<Promotion>returnData=_repo.findAll();
			 for (int i = 0; i < returnData.size(); i++) 
			 {
				 PromotionDTO dto=new PromotionDTO();
				 dto.setDiscountPrice(returnData.get(i).getDiscountPrice());
				 dto.setType(returnData.get(i).getType());
				 response.add(dto);
			 }
			 
			
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}
	@Override
	public PromotionDTO updatePromotion(PromotionDTO promotionDTO) {
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

	public	PromotionDTO deletePromotion(int id) {
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
