import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: 'user.component.html',
	providers: [PostsService]
})

export class UserComponent {
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: post[];

	constructor(private postsService: PostsService) {
		this.name = 'Koykis';
		this.email = 'koykis@gmail.com';
		this.address = {
			street: '33A Boussiou st.',
			city: 'Athens',
			state: 'Attiki'
		}
		this.hobbies = ['Sim Racing', 'Music', 'Programming'];
		this.showHobbies = false;

		this.postsService.getPosts().subscribe(posts => {
			this.posts = posts;
		});
	}

	toggleHobbies(){
		if(this.showHobbies == true){
			this.showHobbies = false;
		}else{
			this.showHobbies = true;
		}
	}

	addHobby(hobby){
		this.hobbies.push(hobby);
	}

	deleteHobby(index){
		this.hobbies.splice(index, 1);
	}

}

interface address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
}
