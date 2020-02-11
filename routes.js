const express = require('express');
const router = express.Router();
const Bookmark = require('./models/Bookmark');
const Category = require('./models/Category');

// Home -- VIEW BOOKMARKS
router.get('/', async (req, res) => {
    const bookmarks = await Bookmark.find().catch(err => console.log(err));
    res.send(bookmarks);
});

// Home -- CREATE BOOKMARK
router.post('/', async (req, res) => {
    const bookmark = new Bookmark({
        tabName: req.body.tabName,
        url: req.body.url
    })

    await bookmark.save().then(() => {
        res.send(bookmark);
    }).catch(e => {
        console.log(e);
    });
});

// Home *module* -- VIEW DETAILS
router.get('/:id', async (req, res) => {
    const bookmark = await Bookmark.findOne({ _id: req.params.id }).catch(e => console.log(e));
    res.send(bookmark);
});

// Home *module* -- UPDATE BOOKMARK
router.patch('/:id', async (req, res) => {
    try {
        const bookmark = await Bookmark.findOne({ _id: req.params.id });

        if (req.body.tabName) {
            bookmark.tabName = req.body.tabName;
        }

        if (req.body.url) {
            bookmark.url = req.body.url;
        }

        if (req.body.category._id) {
            bookmark.category = req.body.category._id
        }

        await bookmark.save();
        res.send(bookmark);
    } catch {
        res.status(400);
        res.send({ error: "Post does not exist" });
    }
});

// Home *module* -- DELETE BOOKMARK
router.delete('/:id', async (req, res) => {
    try {
        await Bookmark.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Post does not exist" });
    }
});

//Categories
//Get all categories
// CATEGORY -- VIEW CATEGORIES
router.get('/categories', async (req, res) => {
    const categories = await Category.find().catch(err => console.log(err));
    res.send(categories);
});

// CATEGORY -- CREATE CATEGORY
router.post('/categories', async (req, res) => {
    const category = new Category({
        category_name: req.body.category_name
    })

    await category.save().then(() => {
        res.send(category);
    }).catch(e => {
        console.log(e);
    });
});

// CATEGORY *module* -- VIEW DETAILS
router.get('/categories/:id', async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id }).catch(e => console.log(e));
    res.send(category);
});

// CATEGORY *module* -- UPDATE CATEGORY
router.patch('/categories/:id', async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id });

        if (req.body.category_name) {
            category.category_name = req.body.category_name;
        }

        await category.save();
        res.send(category);
    } catch {
        res.status(400);
        res.send({ error: "Category does not exist" });
    }
});

// Category *module* -- DELETE CATEGORY
router.delete('/categories/:id', async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Category does not exist" });
    }
});


module.exports = router;