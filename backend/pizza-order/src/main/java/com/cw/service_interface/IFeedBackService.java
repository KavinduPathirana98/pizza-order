package com.cw.service_interface;

import java.util.List;

import com.cw.dto.FeedBackDTO;

public interface IFeedBackService  {

	
	FeedBackDTO addFeedBack(FeedBackDTO feedbackDTO);
	List<FeedBackDTO> viewFeedBack();
}
