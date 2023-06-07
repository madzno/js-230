let inventory;

(function () {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function () {
      let date = new Date();
      document.getElementById('order_date').innerText = date.toUTCString();
    },
    cacheTemplate: function () {
      let inventoryTmpl = document.getElementById('inventory_item');
      this.template = inventoryTmpl.innerHTML;
    },
    add: function () {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function (idx) {
      this.collection = this.collection.filter(function (item) {
        return item.id !== idx;
      });
    },
    get: function (id) {
      let found_item;

      this.collection.forEach(function (item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function (item) {
      let id = this.findID(item),
        item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function (e) {
      e.preventDefault();
      var item = this.add(),
        $item = $(this.template.replace(/ID/g, item.id));

      $("#inventory").append($item);
    },
    findParent: function (e) {
      return e.target.parentNode.parentNode;
    },
    findID: function (item) {
      let id;

      let immediateChildren = Array.from(item.children);

      immediateChildren.forEach(child => {
        let grandChildren = Array.from(child.children);

        grandChildren.forEach(grandChild => {
          if (grandChild.hasAttribute('data-name')) {
            id = grandChild.value;
          }
        });
      });

      return id;

    },

    deleteItem: function (e) {
      e.preventDefault();
      let item = this.findParent(e);
      item.remove();

      this.remove(this.findID(item));
    },
    updateItem: function (e) {
      var item = this.findParent(e);

      this.update(item);
    },
    bindEvents: function () {
      document.getElementById('add_item').addEventListener('click', this.newItem.bind(this));
      document.getElementById('inventory').addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          this.deleteItem(event);
        }
      }.bind(this));
      document.getElementById('inventory').addEventListener('blur', function (event) {
        if (event.target.tagName === 'INPUT') {
          this.updateItem(event);
        }
      }.bind(this))
    },
    init: function () {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  inventory.init();

});

