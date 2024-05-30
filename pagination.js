export function createPagination(pagination, container) {
    const paginationContainer = container; 
    const { pages: totalPageCount, page: activePage } = pagination;

    const createPageLink = (pageNumber, isActive = false) => {
        const pageLink = document.createElement('a');
        pageLink.className = 'pagination-link';
        pageLink.href = pageNumber === 1 ? 'index.html' : `index.html?page=${pageNumber}`;
        pageLink.innerText = pageNumber;
        if (isActive) pageLink.classList.add('current');
        return pageLink;
    };

    const addEllipsis = () => {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.innerText = '...';
        paginationContainer.append(ellipsis);
    };

    if (activePage > 2) paginationContainer.append(createPageLink(1));
    if (activePage > 3) addEllipsis();
    if (activePage > 1) paginationContainer.append(createPageLink(activePage- 1));

    paginationContainer.append(createPageLink(activePage, true));

    if (activePage < totalPageCount) paginationContainer.append(createPageLink(activePage + 1));
    if (activePage < totalPageCount - 2) addEllipsis();
    if (activePage < totalPageCount - 1) paginationContainer.append(createPageLink(totalPageCount));
}