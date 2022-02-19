class Order{
    constructor(Id, Title, Qty, Message, City) {
        this.Id = Id;
        this.Title = Title;
        this.Qty = Qty;
        this.Message = Message;
        this.City = City;
    }
}

module.exports = Order;