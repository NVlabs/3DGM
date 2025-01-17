<div align="center">   
  
# 3D Gaussian Mapping: Simultaneous 2D Segmentation and 3D Mapping with Self-Supervision
</div>




> **Memorize What Matters: Emergent Scene Decomposition from Multitraverse**, NeurIPS 2024 (Spotlight).

> [Yiming Li](https://scholar.google.com/citations?hl=en&user=i_aajNoAAAAJ&view_op=list_works&sortby=pubdate), [Zehong Wang](), [Yue Wang](https://scholar.google.com/citations?user=v-AEFIEAAAAJ&hl=en), [Zhiding Yu](https://scholar.google.com/citations?user=1VI_oYUAAAAJ&hl=en), [Zan Gojcic](https://scholar.google.com/citations?user=8KsqL4gAAAAJ&hl=en), [Marco Pavone](https://scholar.google.com/citations?user=RhOpyXcAAAAJ&hl=en), [Chen Feng](https://scholar.google.com/citations?user=YeG8ZM0AAAAJ&hl=en), [Jose M. Alvarez](https://scholar.google.com/citations?user=Oyx-_UIAAAAJ&hl=en)

>  [[PDF]](https://arxiv.org/pdf/2405.17187) [[Project]](https://3d-gaussian-mapping.github.io/) 

> Emerged 2D segmentation from nine traversals of the same location, collected on different dates: 11-19-2021, 11-22-2021, 11-30-2021, 12-01-2021, 12-06-2021, 12-07-2021, 12-14-2021, 12-15-2021, and 12-16-2021.
<table>
  <tr>
    <td><img src="teaser/loc600/1119.gif" alt="Video 1119" width="100%"></td>
    <td><img src="teaser/loc600/1122.gif" alt="Video 1122" width="100%"></td>
    <td><img src="teaser/loc600/1130.gif" alt="Video 1130" width="100%"></td>
  </tr>
  <tr>
    <td><img src="teaser/loc600/1201.gif" alt="Video 1201" width="100%"></td>
    <td><img src="teaser/loc600/1206.gif" alt="Video 1206" width="100%"></td>
    <td><img src="teaser/loc600/1207.gif" alt="Video 1207" width="100%"></td>
  </tr>
  <tr>
    <td><img src="teaser/loc600/1214.gif" alt="Video 1214" width="100%"></td>
    <td><img src="teaser/loc600/1215.gif" alt="Video 1215" width="100%"></td>
    <td><img src="teaser/loc600/1216.gif" alt="Video 1216" width="100%"></td>
  </tr>
</table>


# News
- [2024/09]: Our paper is accepted as a **NeurIPS 2024 Spotlight** ⚡.
- [2024/05]: Our paper is on [arxiv](https://arxiv.org/abs/2405.17187). 
</br>


# Abstract
Humans naturally retain memories of permanent elements, while ephemeral moments often slip through the cracks of memory. This selective retention is crucial for robotic perception, localization, and mapping. To endow robots with this capability, we introduce 3D Gaussian Mapping (3DGM), a self-supervised, camera-only offline mapping framework grounded in 3D Gaussian Splatting. 3DGM converts multitraverse RGB videos from the same region into a Gaussian-based environmental map while concurrently performing 2D ephemeral object segmentation. *Our key observation is that the environment remains consistent across traversals, while objects frequently change. This allows us to exploit self-supervision from repeated traversals to achieve environment-object decomposition.* More specifically, 3DGM formulates multitraverse environmental mapping as a robust differentiable rendering problem, treating pixels of the environment and objects as inliers and outliers, respectively. Using robust feature distillation, feature residuals mining, and robust optimization, 3DGM jointly performs 3D mapping and 2D segmentation without human intervention. We build the Mapverse benchmark, sourced from the Ithaca365 and nuPlan datasets, to evaluate our method in unsupervised 2D segmentation, 3D reconstruction, and neural rendering. Extensive results verify the effectiveness and potential of our method for self-driving and robotics. 


# Method

| ![space-1.jpg](teaser/arch.png) | 
|:--:| 
| ***Overall framework of 3DGM**. Given multitraverse RGB videos, 3DGM outputs a Gaussian-based environment map (EnvGS) and 2D ephemerality segmentation (EmerSeg) for the input images. Note that the proposed framework is LiDAR-free and self-supervised.* |


# Mapverse

We build the Mapping and segmentation through multitraverse (Mapverse) benchmark, sourced from the [Ithaca365](https://openaccess.thecvf.com/content/CVPR2022/papers/Diaz-Ruiz_Ithaca365_Dataset_and_Driving_Perception_Under_Repeated_and_Challenging_Weather_CVPR_2022_paper.pdf) and [nuPlan](https://arxiv.org/pdf/2403.04133) datasets to evaluate our method in three tasks: unsupervised 2D segmentation, 3D reconstruction, and neural rendering. 
Mapverse features 40 locations, each with no less than 10 traversals, totaling 467 driving video clips and 35,304 images. 

| ![space-1.jpg](teaser/ithaca.png) | 
|:--:| 
| ***Selected Image Frames of Mapverse-Ithaca365.** Each row represents image observations of the same location captured during different traversals, with five traversals shown for brevity.* |
| ![space-1.jpg](teaser/nuplan.png) | 
| ***Selected Image Frames of Mapverse-nuPlan.** Each row represents image observations of the same location captured during different traversals, with five traversals shown for brevity.* |

# Bibtex
If this work is helpful for your research, please cite the following BibTeX entry.

```
@inproceedings{li2024memorize,
      title={Memorize What Matters: Emergent Scene Decomposition from Multitraverse}, 
      author={Yiming Li and Zehong Wang and Yue Wang and Zhiding Yu and Zan Gojcic and Marco Pavone and Chen Feng and Jose M. Alvarez},
      booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
      year={2024}
}
```
