package com.cw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.FeedBackDTO;
import com.cw.entity.FeedBack;
import com.cw.repository.FeedBackRepository;

@Service
public class FeedBackService {

	@Autowired
	private FeedBackRepository _repo;

	public FeedBackDTO addFeedBack(FeedBackDTO feedbackDTO) {
		try {
			FeedBack feedback = new FeedBack();
			BeanUtils.copyProperties(feedbackDTO, feedback);
			FeedBackDTO response = new FeedBackDTO();
			BeanUtils.copyProperties(_repo.save(feedback), response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}

	public List<FeedBackDTO> viewFeedBack() {
		try {
			List<FeedBackDTO> response = new ArrayList<>();
			List<FeedBack> data = new ArrayList<>();
			data = _repo.findAll();
			BeanUtils.copyProperties(data, response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}
}