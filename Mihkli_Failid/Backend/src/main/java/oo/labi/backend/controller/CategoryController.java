package oo.labi.backend.controller;

import oo.labi.backend.model.Category;
import oo.labi.backend.service.CategoryService;
import oo.labi.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("category")
    public List<Category> getCategory() {
        return categoryService.getCategory();
    }

    @PostMapping("category")
    public String postItems(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " + category.getName();
    }
}
