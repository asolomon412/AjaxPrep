package com.ajax.AjaxPrep;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SwapiController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
}
