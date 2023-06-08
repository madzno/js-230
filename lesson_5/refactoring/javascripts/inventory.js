"use strict";

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
      this.template = Handlebars.compile(inventoryTmpl.innerHTML);
      inventoryTmpl.remove();
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
    update: function (row) {
      let id = this.findID(row);
      let item = this.get(id);

      item.name = row.querySelector("[name^=item_name]").value;
      item.stock_number = row.querySelector("[name^=item_stock_number]").value;
      item.quantity = row.querySelector("[name^=item_quantity]").value;
    },
    newItem: function (e) {
      e.preventDefault();
      let item = this.add();
      let table = document.querySelector('#inventory');
      table.insertAdjacentHTML('beforeend', this.template({ id: item.id }));
    },
    findParent: function (e) {
      return e.target.closest("tr");
    },
    findID: function (item) {
      return +item.querySelector("input[type=hidden]").value;
    },

    deleteItem: function (e) {
      e.preventDefault();
      let item = this.findParent(e);
      this.remove(this.findID(item));
      item.remove();
    },
    updateItem: function (e) {
      let item = this.findParent(e);
      this.update(item);
    },
    bindEvents: function () {
      document.getElementById('add_item').addEventListener('click', this.newItem.bind(this));
      document.getElementById('inventory').addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          this.deleteItem(event);
        }
      }.bind(this));
      document.getElementById('inventory').addEventListener('focusout', function (event) {
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
  inventory.init.bind(inventory)();

});

