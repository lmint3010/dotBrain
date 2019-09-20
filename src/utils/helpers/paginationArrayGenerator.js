export const type = {
    rootstart: "ROOT_START",
    rootend: "ROOT_END",
    page: "PAGE",
    left: "LEFT_CONTROL",
    right: "RIGHT_CONTROL"
}

const LEFT_PAGE = { type: type.left, value: "LEFT_PAGE" }
const RIGHT_PAGE = { type: type.right, value: "RIGHT_PAGE" }

const range = (from, to, step = 1) => {
    let i = from
    const range = []

    while (i <= to) {
        range.push({ type: type.page, value: i })
        i += step
    }

    return range
}

// <<------ Logic Handle Function ------->>
/**
 * @param {number} totalPages
 * @param {number} currentPage
 * @return {[any]} Array pagination data
 **/
const paginationArrayGenerator = (
    totalPages,
    currentPage,
    pageNeighbours = 2
) => {
    const totalNumbers = pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPage - pageNeighbours)
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

        let pages = range(startPage, endPage)

        const hasLeftSpill = startPage > 2
        const hasRightSpill = totalPages - endPage > 1
        const spillOffset = totalNumbers - (pages.length + 1)

        switch (true) {
            case hasLeftSpill && !hasRightSpill: {
                const extraPages = range(startPage - spillOffset, startPage - 1)
                pages = [LEFT_PAGE, ...extraPages, ...pages]
                break
            }

            case !hasLeftSpill && hasRightSpill: {
                const extraPages = range(endPage + 1, endPage + spillOffset)
                pages = [...pages, ...extraPages, RIGHT_PAGE]
                break
            }

            case hasLeftSpill && hasRightSpill:
            default: {
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
                break
            }
        }
        return [
            { type: type.rootstart, value: 1 },
            ...pages,
            { type: type.rootend, value: totalPages }
        ]
    }

    return range(1, totalPages)
}

export default paginationArrayGenerator
