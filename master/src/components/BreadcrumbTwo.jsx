import React from 'react'

const BreadcrumbTwo = ({ title }) => {
    return (
        <div className="breadcrumb py-26 bg-color-one">
            <div className="container container-lg">
                <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                    <h6 className="mb-0">Shop Details</h6>
                    <ul className="flex-align gap-8 flex-wrap">
                        <li className="text-sm">
                            <a href="index.html" className="text-main-600 flex-align gap-8">
                                <i className="ph ph-house" />
                                Home
                            </a>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <a href="shop.html" className="text-main-600 flex-align gap-8">
                                {title}
                            </a>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <a href="index.html" className="text-main-600 flex-align gap-8">
                                Shop Grid
                            </a>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm text-neutral-600">Lay's Potato Chips</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default BreadcrumbTwo