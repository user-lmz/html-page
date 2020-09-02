var collection=new Array();
var v1=new Vue({
	el: '#app',
	methods: {
		collect: function(event,add){
			collection.push({name: event, add: add})
			
		},
		gotolink: function(page){
			this.$router.replace(page)
		}
	},
	computed: {
		
	}
})