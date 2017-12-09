const sea = {
	use (path,fn_end){
		$.ajax({
			url:path,
			success(str){
				parseStr(str,fn_end);
				function parseStr(str,fn_end){
					function define(fn) {
					let module ={
						exports: {

						}
					};
					fn(function(){},module.exports,module);
					fn_end(module.exports);
				}

				let arr //拿到的那些require请求的地址

				next();
				let i=0;
				let json ={};
				function next(){
					$.ajax({
						url:arr[i],
						success(str){
							parseStr(str,function(mod){
								json[arr[i]] = mod;
								i++;
								if(i == arr.length) {
									eval(str);
								}else {
									next();
								}
							})

						},
						error(){

						}
					})
				}


				
				}
			},
			error(){
				alert("请求失败");
			}
		})
	}
}
