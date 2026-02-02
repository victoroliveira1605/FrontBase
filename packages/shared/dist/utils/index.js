// Shared utilities
export const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR');
};
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};
//# sourceMappingURL=index.js.map