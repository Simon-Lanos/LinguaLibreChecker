const translate = function (key, domain = navigator.language) {
    const translations = {
        fr: {
            'author': 'Auteur',
            'action': 'Action',
            'date': 'Date',
            'duration': 'Durée',
            'export': 'Exporter',
            'file': 'Fichier',
            'size': 'Taille',
            'tags': 'Tags',
            'word': 'Mot',
        },
        en: {
            'author': 'Author',
            'action': 'Action',
            'date': 'Date',
            'duration': 'Duration',
            'export': 'Export',
            'file': 'File',
            'size': 'Size',
            'tags': 'Tags',
            'word': 'Word',
        }
    };

    return translations[domain][key];
};
