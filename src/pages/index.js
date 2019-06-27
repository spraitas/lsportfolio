import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Button from "../components/button"

const IndexPage = () => (
  <Button as={Link} to="/about">
          About me
        </Button>
)

export default IndexPage
