import React, { useState } from 'react';
import { MdEditor, ToolbarNames } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import styled from 'styled-components';
import { Button } from 'antd';
import { PageRoutes } from '../shared/conf/PageRoutes';
import { useNavigate } from 'react-router';

const EditExamPage = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  flex-direction: column;
  
  min-height: calc(100vh - 200px);
`

const EditorWrapper = styled(MdEditor)`
  /* height: 95%; */
  min-height: calc(100vh - 200px);
`
const toolbars = [
  'bold',
  'underline',
  'italic',
  '-',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  'katex',
  '-',
  'revoke',
  'next',
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'previewOnly',
  'htmlPreview',
  'catalog',
]

const EditExam = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('# Hello Editor');
  const save = () => {
    console.log(text);
  }
  const cancel = () => {
    navigate(PageRoutes.EXAMMANGE);
  }

  return (
    <EditExamPage>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20, paddingRight: 20, width: '100%' }}>
        <Button type="primary" onClick={save} style={{ marginBottom: 20 }}>完成</Button>
        <Button onClick={cancel} style={{ marginBottom: 20 }}>取消</Button>
      </div>
      <EditorWrapper modelValue={text} onChange={setText} toolbars={toolbars as ToolbarNames[]} />
    </EditExamPage>
  )
}

export default EditExam;