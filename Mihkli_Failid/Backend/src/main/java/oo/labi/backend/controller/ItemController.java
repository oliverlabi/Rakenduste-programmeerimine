package oo.labi.backend.controller;

import oo.labi.backend.model.Item;
import oo.labi.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItems(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud: " + item.getName();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }
}

// delete päring
// edit päring
// view one item päring

// andmebaas

// kategooria osas samad kõik päringud - CategoryService, CategoryItem, CategoryRepository, CategoryController
