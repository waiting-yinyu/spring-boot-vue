package com.okta.springbootvue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
*
*
*@author: 尹宇
*@mail yinyu@zving.com
*@date:2019年1月2日
*/
@RepositoryRestResource
interface TodoRepository extends JpaRepository<Todo, Long>{}
