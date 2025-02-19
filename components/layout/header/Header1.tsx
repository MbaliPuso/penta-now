'use client'
import dynamic from 'next/dynamic'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
	ssr: false,
})
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isOffcanvas }: any) {
	return (
		<>
			<header className={`header header-fixed sticky-bar ${scroll ? 'stick' : ''}`}>
				<div className="container-fluid">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo">
								<Link className="d-flex" href="/">
									<img className="light-mode" alt="Carento" src="/assets/imgs/template/logo-w.svg" />
									<img className="dark-mode" alt="Carento" src="/assets/imgs/template/logo-w.svg" />
								</Link>
							</div>
							<div className="header-nav">
								<nav className="nav-main-menu">
									<ul className="main-menu">
										<li className="has-children arrow-white">
											<Link className="color-white" href="#">Home</Link>
											<ul className="sub-menu">
												<li><Link href="/">Home page v1</Link></li>
												<li><Link href="/index-2">Home page v2</Link></li>
												<li><Link href="/index-3">Home page v3</Link></li>
											</ul>
										</li>
										<li className="mega-li-small has-children arrow-white">
											<Link className="color-white" href="#">Vehicles</Link>
											<div className="mega-menu">
												<div className="mega-menu-inner mega-menu-inner-small">
													<div className="row">
														<div className="col-lg-6">
															<h6 className="text-lg-bold neutral-1000">Cars List</h6>
															<ul className="sub-menu">
																<li><Link href="/cars-list-1">Cars List v1</Link></li>
																<li><Link href="/cars-list-2">Cars List v2</Link></li>
																<li><Link href="/cars-list-3">Cars List v3</Link></li>
																<li><Link href="/cars-list-4">Cars List v4</Link></li>
															</ul>
														</div>
														<div className="col-lg-6">
															<h6 className="text-lg-bold neutral-1000">Car Details</h6>
															<ul className="sub-menu">
																<li><Link href="/cars-details-1">Car Details v1</Link></li>
																<li><Link href="/cars-details-2">Car Details v2</Link></li>
																<li><Link href="/cars-details-3">Car Details v3</Link></li>
																<li><Link href="/cars-details-4">Car Details v4</Link></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="has-children arrow-white">
											<Link className="color-white" href="#">Dealers</Link>
											<ul className="sub-menu">
												<li><Link href="/dealer-listing">Dealers Listing</Link></li>
												<li><Link href="/dealer-details">Dealer Details</Link></li>
											</ul>
										</li>
										<li className="has-children arrow-white">
											<Link className="color-white" href="#">Shop</Link>
											<ul className="sub-menu">
												<li><Link href="/shop-list">Shop Grid</Link></li>
												<li><Link href="/shop-details">Product Details</Link></li>
											</ul>
										</li>
										<li className="has-children arrow-white">
											<Link className="color-white" href="#">Pages</Link>
											<ul className="sub-menu">
												<li><Link href="/about-us">About Us</Link></li>
												<li><Link href="/services">Our Services</Link></li>
												<li><Link href="/pricing">Pricing</Link></li>
												<li><Link href="/calculator">Loan Calculator</Link></li>
												<li><Link href="/faqs">FAQs</Link></li>
												<li><Link href="/term">Term</Link></li>
												<li><Link href="/contact">Contact</Link></li>
												<li><Link href="/login">Login</Link></li>
												<li><Link href="/register">Register</Link></li>
												<li><Link href="/404">Error 404</Link></li>
											</ul>
										</li>
										<li className="mega-li-small has-children arrow-white">
											<Link className="color-white" href="#">News</Link>
											<div className="mega-menu">
												<div className="mega-menu-inner mega-menu-inner-small mega-menu-inner-destinations">
													<div className="row">
														<div className="col-lg-12">
															<h6 className="text-lg-bold neutral-1000">Cars Rental</h6>
															<ul className="sub-menu">
																<li><Link href="/blog-grid">News Grid</Link></li>
																<li><Link href="/blog-list">News List</Link></li>
																<li><Link href="/blog-details">News Details</Link></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li><Link className="color-white" href="/contact">Contact</Link></li>
									</ul>
								</nav>
							</div>
							<div className="header-right">
								<div className="d-none d-xxl-inline-block align-middle mr-15">
									<Link className="btn btn-signin" href="/login">
										<svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path d="M3 14C3 14 2 14 2 13C2 12 3 9 8 9C13 9 14 12 14 13C14 14 13 14 13 14H3ZM8 8C8.79565 8 9.55871 7.68393 10.1213 7.12132C10.6839 6.55871 11 5.79565 11 5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5C5 5.79565 5.31607 6.55871 5.87868 7.12132C6.44129 7.68393 7.20435 8 8 8Z" fill="white" />
										</svg>
										Sign in
									</Link>
									<Link className="btn btn-signin bg-white text-dark" href="/pricing">Add Listing</Link>
								</div>
								<div className="burger-icon-2 burger-icon-white" onClick={handleOffcanvas}>
									<img src="/assets/imgs/template/icons/menu.svg" alt="Carento" />
								</div>
								<div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
									<span className="burger-icon-top" />
									<span className="burger-icon-mid"> </span>
									<span className="burger-icon-bottom"> </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
