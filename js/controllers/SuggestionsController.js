app.controller('SuggestionsController', ['$scope', '$routeParams', 'suggestions', function($scope, 
	$routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function() {
		// if input empty, don't submit
		if (!$scope.com || $scope.com == "") {
			return
		}

		// push comment in suggestions.js
		$scope.post.comments.push({
			body: $scope.com,
			upvotes: 0
		})
		
		// after submit, clear input
		$scope.com = "";
	}

	$scope.upVote = function(comment) {
		comment.upvotes+=1;
	}

}])