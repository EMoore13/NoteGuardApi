const express = require('express');
const router = express.Router();
const Bookmark = require('./models/Bookmark');

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

module.exports = router;