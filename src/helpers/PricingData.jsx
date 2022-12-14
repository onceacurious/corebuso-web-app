// Amount all in dollars

export const pricingPlan = {
    basic: {
        price: 5,
        planInfo: 'Good for a personal or a small business website with 2 to 3 pages.',
        page: 2,
        pageInfo: '2nd page of your choice',
        addPageInfo: 'Compose of Home/Landing page and About/FAQ or Contact; 3rd page subject for provision',
        deliveryTime: 2,
        revision: 2,
        sourceCode: true,
        responsive: true,
        contentUpload: false,
        customDesign: false,
    },
    standard: {
        price: 15,
        planInfo: 'Basic plus; Good for a small to medium business website and a blog site with 3 to 4 pages.',
        page: 3,
        pageInfo: '3nd and 4th page of your choice',
        addPageInfo: '4th page subject for provision',
        deliveryTime: 5,
        revision: 2,
        contentUpload: true,
        customDesign: false,
    },
    premium: {
        price: 25,
        planInfo: 'Standard plus; Good for medium to large business website with 5 to 6 pages.',
        page: 5,
        pageInfo: '3nd and 4th page of your choice',
        addPageInfo: '6th page subject for provision',
        deliveryTime: 12,
        revision: 2,
        customDesign: true,
    }

}

export const pricingPlanAdd = {
    basic: {
        fastDelivery: 1,
        fastPrice:0,
        addPage: 1,
        addPagePrice: 0,
        addRevision: 1,
        addRevisionPrice: 0,
        contentUpload: true,
        contentUploadPrice: 0,
        customDesign: true,
        customDesignPrice: 0,
    },
    standard: {
        fastDelivery: 3,
        fastPrice:0,
        addPage: 1,
        addPagePrice: 0,
        addRevision: 1,
        addRevisionPrice: 0,
        contentUpload: true,
        contentUploadPrice: 0,
        customDesign: true,
        customDesignPrice: 0,
    },
    premium: {
        fastDelivery: 10,
        fastPrice:0,
        addPage: 1,
        addPagePrice: 0,
        addRevision: 1,
        addRevisionPrice: 0,
        contentUpload: true,
        contentUploadPrice: 0,
        customDesign: true,
        customDesignPrice: 0,
    }
}

export const pricingPlanExtra = {
    // Server pricing base on database structure
    basic: {
        server: true,
        serverPrice: 0,
    },
    standard: {
        server: true,
        serverPrice: 0,
    },
    premium: {
        server: true,
        serverPrice: 0,
    }
}
