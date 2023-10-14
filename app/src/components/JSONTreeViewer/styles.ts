import styled from "styled-components"

export const JSONTreeViewerContainer = styled.div`
  min-width: 638px;
  padding-bottom: 24px;

  > ul > li {
    margin-left: 0;
  }

  > ul {
    border: none;
    margin-left: 0;
  }
`

export const Filename = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  margin-bottom: 10px;
`

export const UnorderedList = styled.ul`
  border-left: 1px solid #BFBFBF;
  margin-left: 4px;
`

export const ListItem = styled.li`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.244px;
  list-style: none;
  margin-left: 21px;
`

export const Key = styled.span`
  color: #4E9590;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.244px;
`

export const Brackets = styled.span`
  color: #F2CAB8;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.244px;
`

export const ArrayIndex = styled.span`
  color: #BFBFBF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.244px;
`