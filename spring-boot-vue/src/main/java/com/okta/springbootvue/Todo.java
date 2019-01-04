package com.okta.springbootvue;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.*;

/**
 * 自定义Todo模型类
 * 
 * @author: 尹宇
 * @mail yinyu@zving.com
 * @date:2019年1月2日
 */
@Entity
@Data
@NoArgsConstructor
public class Todo {

	@Id
	@GeneratedValue
	private Long id;

	@NonNull
	private String title;

	private Boolean completed = false;


}