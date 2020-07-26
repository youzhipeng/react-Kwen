import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from 'draftjs-to-html'// draft对象==》html 方便存储数据库（预览功能， 直接取出，显示在html页面上，） // draft 对象==> markdown 存到数据库

import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';

export default class ArticleEditor extends Component {

    state = {
        editorState:"", //
        contentState:""
    }

    componentDidMount() {
        console.log("第一次会执行",this.props.content)
        if(!this.props.content){
            return ;
        }

        const html = this.props.content;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks); //内容状态
          const editorState = EditorState.createWithContent(contentState);//编辑器状态
          this.setState({
              editorState
          })
        }
    }
    

    render() {
        return (
            <div>
                {/* {this.props.content} */}
                <Editor
                    editorState={this.state.editorState} //编辑器状态
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    // contentState = {this.state.contentState} //内容状态
                    onEditorStateChange={this.onEditorStateChange}
                    onContentStateChange = {this.onContentStateChange}

                    onBlur = {()=>{
                        // console.log("失去焦点",draftjsToHtml(this.state.contentState))

                        //子=>父
                        this.props.onEvent(draftjsToHtml(this.state.contentState))
                    }}
                />
            </div>
        )
    }

    onContentStateChange = (contentState)=>{
        // console.log(draftjsToHtml(contentState)) 
        // contentState ==> html 格式代码 ===> 存到数据库中
        this.setState({
            contentState
        })
    }

    onEditorStateChange = (editorState)=>{
        // console.log(editorState)
        this.setState({
            editorState
        })
    }
}
