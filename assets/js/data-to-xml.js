const dataToXml = function (data) {
    const namespace = null;
    const doc = document.implementation.createDocument(namespace, 'xml', null);

    const body = document.createElementNS(namespace, 'entries');

    data.forEach((file) => {
        const entry = document.createElementNS(namespace, 'file');

        entry.setAttribute('author', file.author);
        entry.setAttribute('date', file.date);
        entry.setAttribute('src', file.file);

        const tags = document.createElementNS(namespace, 'tags');
        file.tags.forEach((tag) => {
            const tagEl = document.createElementNS(namespace, 'tag');
                tagEl.setAttribute('name', tag.toString());
            tags.appendChild(tagEl);
        });
        entry.appendChild(tags);

        body.appendChild(entry);
    });

    doc.documentElement.appendChild(body);

    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
};
