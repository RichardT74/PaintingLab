const Decorator = function(){
	this.paint_can_stocks = [];
}

Decorator.prototype.initial_stock = function(){
	return this.paint_can_stocks.length;
}
Decorator.prototype.add_stock = function(paint_can_stock) {
	this.paint_can_stocks.push(paint_can_stock);
}
