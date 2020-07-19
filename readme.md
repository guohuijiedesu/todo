TODOMVC功能

##页面效果：
####1.无事项时，只有一个文本框，
####2.有事项时，显示：
#####(1)无事项时的文本框
#####(2)全选键
#####(3)事项列表（包括是否完成的icon、输入框和X键）
#####(4)footer（包括剩余需完成数量、All键、Active键、Completed键、Clear Completed键、底部三层带阴影的样式)
#####PS:其中，事项列表的X键和clear completed有显示要求。
事项列表的X键在鼠标放到对应事项中对应的X显示，Clear Completed键在列表中存在已完成事项时显示。
#####由页面效果的要求需要注意的点：在新增和删除时都需要注意，删到没有事项时，只有一个文本框显示。增加的时候的时候，如果是从列表没有事项变到有事项的状态，除了原本的主文本框，新添全选键、事项列表、footer三个模块的显示。
![firstView][1]
![seconView][2]

##具体每一块的功能：
###一、文本框部分：
####1.文本框：
1.自动获取焦点功能：autofocus。
2.placeholder：1color，2斜体(font-style:italic),3加粗font-weight。
3.Enter键将输入内容加入list中。
![mainInput][3]
####2.全选键：
####2.1全选键显示：
（1）列表数量为零时，不显示。
![allCheckLook1][4]
（2）0<已完成数量<全部数量时，为灰色。
![allCheckLook2][5]
（3）已完成数量=全部数量时（也就是全部都完成时），为黑色。
![allCheckLook3][6]
####2.2全选键功能：
1.全选数量=0或全选数量<列表数量时，全选键功能为将列表所有事项变成已完成状态（也就是：icon为绿色打勾的完成样式，字体颜色为灰色，字体上有叉掉的灰线）。
![全选数量=0时][7]
![全选数量<列表数量时][8]
![全选数量=0或全选数量<列表数量时点击全选结果][9]
2.全选数量=列表数量时，全选键功能为将列表所有事项变成未完成状态（也就是：icon为灰色圆圈的未完成样式，字体颜色为黑色，字体上没有叉掉的线text-decoration）。
![全选数量=列表数量时][10]
![全选数量=列表数量时点击全选结果][11]
3.无论对它修改与否，刷新都可看到缓存了下来。
####2.3全选键效果
1.列表无事项时，无全选键显示。
![列表无事项时][12]
2.列表有事项且全选数量=0时，全选键为灰色。
![列表有事项且全选数量=0时][13]
3.列表有事项且全选数量<列表数量时，全选键为灰色。
![列表有事项且全选数量<列表数量时][14]
4.列表有事项且全选数量=列表数量时，全选键为黑色。
![列表有事项且全选数量=列表数量时][15]
###二、列表部分：
####1.列表的icon：
#####1.1列表的icon功能：
1.将当前事项的未完成状态变成已完成状态（也就是：icon为绿色打勾的完成样式，字体颜色为灰色，字体上有叉掉的灰线）。
![未完成状态][16]
2.将当前事项的已完成状态变成未完成状态（也就是：icon为灰色圆圈的未完成样式，字体颜色为黑色，字体上没有叉掉的线text-decoration）。
![已完成状态][17]

3.无论对它修改与否，刷新都可看到缓存了下来
####2.列表的文本框：
#####2.1列表的文本框功能：
1双击可编辑
2无论对它修改与否，单击文本框之外的别的地方都会变回不可编辑状态
3无论对它修改与否，刷新数值都缓存住了。
#####2.2列表的文本框的效果：
1.未双击状态，不能改变文本，鼠标为default样式，只读。样式没有变化，还是对应着是否完成的列表状态。
2.双击进入可编辑状态，鼠标样式变为text样式，只读变成可编辑。
样式为（1）没有icon图标，（2）没有底部线条，（3）文本框又无边框变成黑框带阴影，（4）X键隐藏。（5）如果是已完成事项，在此可编辑状态下，去掉横线，更改颜色为黑色，编辑完成保存变回已完成状态（把字变回带横线的灰色字）。
![列表文本框变化][18]
####3.列表的X键：
#####3.1列表的X键功能：
1鼠标放在对应的事项时，对应X键显示
2单击删除对应事项
3无论点击删除与否，刷新数值都缓存住了。
###三、footer部分：
####1.剩余多少个代办事项：items left
#####1.1剩余多少个代办事项的功能：
1事项为0时，隐藏。
2对全选、选择、删除、新增、清空已完成这五个操作时，实时改变，其余操作对它没有影响。
3无论对界面是否做出什么操作，刷新发现都缓存下来了。
####2.All键：
#####2.1All键的功能：
1事项为0时，隐藏。
2选中它时，显示所有存在的事项
3对全选、选择、删除、新增、清空已完成这五个操作时，实时改变，其余操作对它没有影响。
####3.Active键：
#####3.1Active键的功能：
1事项为0时，隐藏。
2选中它时，显示所有未完成的事项
3对全选、选择、删除、新增、清空已完成这五个操作时，实时改变，其余操作对它没有影响。
####4.Completed键：
#####4.1Completed键的功能：
1事项为0时，隐藏。
2选中它时，显示所有已完成的事项
3对全选、选择、删除、新增、清空已完成这五个操作时，实时改变，其余操作对它没有影响。
![footer的三个按钮][19]
####5.Clear completed键
#####5.1Clear completed键的功能：
1事项为0时，隐藏。
2经过它时，有下划线
![存在已完成事项时出现，经过它时有下划线][20]
3只有事项中，存在已完成事项时才会出现
![存在已完成事项时出现][21]
4点击删除所有已完成事项
3对全选、选择、删除、新增这四个操作时，实时改变，其余操作对它没有影响。


  [1]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/startView.JPG
  [2]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/secondView.png
  [3]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/mainInputFunction.png
  [4]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckLook1.JPG
  [5]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckLook2.JPG
  [6]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckLook3.JPG
  [7]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction1.JPG
  [8]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction11.JPG
  [9]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction2.JPG
  [10]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction2.JPG
  [11]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction22.JPG
  [12]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/startView.JPG
  [13]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction1.JPG
  [14]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction11.JPG
  [15]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/allCheckFunction2.JPG
  [16]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/checkFunction1.JPG
  [17]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/checkFunction1.JPG
  [18]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/listInputFunction.JPG
  [19]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/footerButtonFunction.JPG
  [20]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/clearCompletedFunction1.JPG
  [21]: https://github.com/guohuijiedesu/todo/raw/master/readmePic/clearCompletedFunction2.JPG