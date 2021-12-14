const translate = function (key, domain = navigator.language) {
    const translations = {
        fr: {
            'author': 'Auteur',
            'date': 'Date',
            'duration': 'Durée',
            'export': 'Exporter',
            'file': 'Fichier',
            'size': 'Taille',
        },
        en: {
            'author': 'Author',
            'date': 'Date',
            'duration': 'Duration',
            'export': 'Export',
            'file': 'File',
            'size': 'Size',
        }
    };

    return translations[domain][key];
};
